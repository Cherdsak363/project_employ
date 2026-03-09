import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import prisma from '../../../../../../lib/db'
import { authOptions } from '../../../../auth/[...nextauth]/route'

export async function POST(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await context?.params
    const conversationId = params?.id
    if (!conversationId) {
      return NextResponse.json({ error: 'Missing conversation id' }, { status: 400 })
    }

    // Check if user is participant
    const participant = await prisma.conversationParticipant.findUnique({
      where: {
        conversationId_userId: {
          conversationId,
          userId: session.user.id,
        },
      },
    })

    if (!participant) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const data = await request.formData()
    const rawFiles = data.getAll('files')

    const files = rawFiles.filter((f) => f && typeof f === 'object' && typeof f.arrayBuffer === 'function')

    if (!files.length) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    const uploadsDir = join(process.cwd(), 'public', 'uploads', 'messages')
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch {}

    const maxSize = 10 * 1024 * 1024 // 10MB

    const created = []
    
    // We need a message to attach these to. 
    // Usually, we upload files first, then create the message, or vice versa.
    // Let's create a placeholder message or handle it in the frontend.
    // Actually, a better flow for chat is:
    // 1. Upload files -> returns temp paths or IDs
    // 2. Send message with those IDs
    // But to keep it simple and consistent with JobAttachments:
    // Let's expect a 'messageId' in the formData if it exists, 
    // or we create a message here if 'body' is also provided.
    
    let messageId = data.get('messageId')
    
    if (!messageId) {
      // Create a message automatically if no messageId provided
      const body = data.get('body') || ''
      const msg = await prisma.message.create({
        data: {
          conversationId,
          senderId: session.user.id,
          body: String(body),
        }
      })
      messageId = msg.id
      
      // Update conversation lastMessageAt
      await prisma.conversation.update({
        where: { id: conversationId },
        data: { lastMessageAt: msg.createdAt }
      })
    }

    for (const file of files) {
      if (typeof file.size === 'number' && file.size > maxSize) {
        continue // Skip large files
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const ext = typeof file.name === 'string' && file.name.includes('.')
        ? file.name.split('.').pop()
        : 'bin'

      const filename = `msg-${messageId}-${Date.now()}-${Math.random().toString(16).slice(2)}.${ext}`
      const filepath = join(uploadsDir, filename)
      await writeFile(filepath, buffer)

      const rec = await prisma.messageAttachment.create({
        data: {
          messageId,
          path: `/uploads/messages/${filename}`,
          filename: typeof file.name === 'string' ? file.name : filename,
          mimeType: typeof file.type === 'string' ? file.type : 'application/octet-stream',
          size: typeof file.size === 'number' ? Math.trunc(file.size) : buffer.length,
        },
      })

      created.push(rec)
    }

    return NextResponse.json({ messageId, attachments: created }, { status: 201 })
  } catch (error) {
    console.error('POST /api/conversations/[id]/messages/attachments failed', error)
    return NextResponse.json({ error: 'Failed to upload attachments' }, { status: 500 })
  }
}
