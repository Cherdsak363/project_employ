import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import prisma from '@/lib/db'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { scanFile } from '@/lib/virustotal'

export async function POST(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await (context?.params || {});
    const conversationId = params?.id;
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

    for (const file of files) {
      if (typeof file.size === 'number' && file.size > maxSize) {
        return NextResponse.json({ 
          error: `ไฟล์ "${file.name}" มีขนาดใหญ่เกินไป (จำกัด 10MB)` 
        }, { status: 413 })
      }
    }

    // Virus Scanning
    const skipScan = data.get('confirmInfected') === 'true'
    const scanResults = []

    if (!skipScan) {
      console.log(`[API] Starting virus scan for ${files.length} files...`);
      for (const file of files) {
        const bytes = await file.arrayBuffer()
        const buffer = Buffer.from(bytes)
        console.log(`[API] Scanning file: ${file.name}, size: ${buffer.length} bytes`);
        const scanResult = await scanFile(buffer, file.name)
        
        console.log(`[API] Scan result for ${file.name}: infected=${scanResult.infected}, pos=${scanResult.pos}`);
        if (scanResult.infected) {
          scanResults.push({
            filename: file.name,
            pos: scanResult.pos,
            total: scanResult.total,
            link: scanResult.link
          })
        }
      }

      if (scanResults.length > 0) {
        console.log(`[API] !!! INFECTED FILES DETECTED !!!: ${JSON.stringify(scanResults)}`);
        // Force headers to ensure no caching and clear content type
        return new Response(JSON.stringify({ 
          error: 'พบไฟล์ที่มีความเสี่ยง',
          code: 'INFECTED_FILES',
          files: scanResults
        }), { 
          status: 400, 
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store'
          } 
        })
      }
    }

    console.log('[API] No threats detected or scan skipped. Proceeding with upload.');
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
