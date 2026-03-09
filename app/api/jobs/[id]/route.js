import prisma from '../../../../lib/db'
import { NextResponse } from 'next/server'

export async function GET(request, context) {
  try {
    const params = await context?.params
    const id = params?.id
    if (!id) {
      return NextResponse.json({ error: 'Missing job id' }, { status: 400 })
    }

    const job = await prisma.job.findUnique({
      where: { id },
      include: {
        client: { select: { id: true, name: true, email: true, avatarPath: true } },
        artist: { select: { id: true, name: true, email: true, avatarPath: true } },
        attachments: true,
      },
    })

    if (!job) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }

    return NextResponse.json(job)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 })
  }
}
