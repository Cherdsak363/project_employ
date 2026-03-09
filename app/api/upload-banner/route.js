import { writeFile, mkdir } from 'fs/promises'
import { NextResponse } from 'next/server'
import { join } from 'path'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import prisma from '../../../lib/db'

export async function POST(request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const data = await request.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({ error: 'No file uploaded' }, { status: 400 })
  }

  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: 'Invalid file type' }, { status: 400 })
  }

  const maxSize = 5 * 1024 * 1024
  if (file.size > maxSize) {
    return NextResponse.json({ error: 'File too large' }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadsDir = join(process.cwd(), 'public', 'uploads')
  try {
    await mkdir(uploadsDir, { recursive: true })
  } catch {}

  const ext = file.name.split('.').pop()
  const filename = `${session.user.id}-banner-${Date.now()}.${ext}`
  const filepath = join(uploadsDir, filename)

  await writeFile(filepath, buffer)

  const bannerPath = `/uploads/${filename}`
  await prisma.user.update({
    where: { id: session.user.id },
    data: { bannerPath }
  })

  return NextResponse.json({ bannerPath })
}
