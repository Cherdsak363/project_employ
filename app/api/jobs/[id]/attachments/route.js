import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'

import prisma from '../../../../../lib/db'
import { authOptions } from '../../../auth/[...nextauth]/route'

export async function POST(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await context?.params
    const id = params?.id
    if (!id) {
      return NextResponse.json({ error: 'Missing job id' }, { status: 400 })
    }

    const job = await prisma.job.findUnique({ where: { id }, select: { id: true, clientId: true } })
    if (!job) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    if (job.clientId && job.clientId !== session.user.id) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const data = await request.formData()
    const rawFiles = data.getAll('files')

    const files = rawFiles.filter((f) => f && typeof f === 'object' && typeof f.arrayBuffer === 'function')

    if (!files.length) {
      return NextResponse.json({ error: 'No files uploaded' }, { status: 400 })
    }

    const uploadsDir = join(process.cwd(), 'public', 'uploads')
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch {}

    const maxSize = 10 * 1024 * 1024

    const created = []
    for (const file of files) {
      if (typeof file.size === 'number' && file.size > maxSize) {
        return NextResponse.json({ error: 'File too large' }, { status: 400 })
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const ext = typeof file.name === 'string' && file.name.includes('.')
        ? file.name.split('.').pop()
        : 'bin'

      const filename = `${id}-${Date.now()}-${Math.random().toString(16).slice(2)}.${ext}`
      const filepath = join(uploadsDir, filename)
      await writeFile(filepath, buffer)

      const rec = await prisma.jobAttachment.create({
        data: {
          jobId: id,
          path: `/uploads/${filename}`,
          filename: typeof file.name === 'string' ? file.name : filename,
          mimeType: typeof file.type === 'string' ? file.type : 'application/octet-stream',
          size: typeof file.size === 'number' ? Math.trunc(file.size) : buffer.length,
          uploadedById: session.user.id,
        },
      })

      created.push(rec)
    }

    return NextResponse.json({ attachments: created }, { status: 201 })
  } catch (error) {
    console.error('POST /api/jobs/[id]/attachments failed', error)
    return NextResponse.json({ error: 'Failed to upload attachments' }, { status: 500 })
  }
}
