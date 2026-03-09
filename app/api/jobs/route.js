import prisma from '../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const jobs = await prisma.job.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        client: { select: { id: true, name: true, avatarPath: true } },
        proposals: {
          orderBy: { createdAt: 'desc' },
          include: { artist: { select: { id: true, name: true, avatarPath: true } } }
        },
        attachments: true
      }
    })
    return NextResponse.json(jobs)
  } catch (error) {
    console.error('GET /api/jobs failed', error)
    return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { id: true },
    })

    if (!client?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const title = typeof body.title === 'string' ? body.title.trim() : ''
    const description = typeof body.description === 'string' ? body.description.trim() : ''
    const contact = typeof body.contact === 'string' ? body.contact.trim() : ''

    if (!title || !description || !contact) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const style = typeof body.style === 'string' ? body.style.trim() : null
    const category = typeof body.category === 'string' ? body.category.trim() : null

    const budgetMin = Number.isFinite(body.budgetMin) ? body.budgetMin : (typeof body.budgetMin === 'string' ? Number(body.budgetMin) : null)
    const budgetMax = Number.isFinite(body.budgetMax) ? body.budgetMax : (typeof body.budgetMax === 'string' ? Number(body.budgetMax) : null)
    const parsedBudgetMin = Number.isFinite(budgetMin) ? Math.max(0, Math.trunc(budgetMin)) : null
    const parsedBudgetMax = Number.isFinite(budgetMax) ? Math.max(0, Math.trunc(budgetMax)) : null

    const deadline = body.deadline ? new Date(body.deadline) : null
    const parsedDeadline = deadline && !Number.isNaN(deadline.getTime()) ? deadline : null

    const job = await prisma.job.create({
      data: {
        title,
        description,
        contact,
        style,
        category,
        budgetMin: parsedBudgetMin,
        budgetMax: parsedBudgetMax,
        deadline: parsedDeadline,
        clientId: client.id,
      }
    })

    return NextResponse.json(job, { status: 201 })
  } catch (error) {
    console.error('POST /api/jobs failed', error)
    return NextResponse.json({ error: 'Failed to create job' }, { status: 500 })
  }
}
