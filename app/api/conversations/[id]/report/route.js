import prisma from '../../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function POST(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await context.params
    const conversationId = params?.id
    const userId = session.user.id

    const body = await request.json().catch(() => null)
    if (!body || !body.targetUserId) {
      return NextResponse.json({ error: 'Target user ID required' }, { status: 400 })
    }

    const { targetUserId, reason } = body

    const report = await prisma.report.create({
      data: {
        reporterId: userId,
        reportedId: targetUserId,
        conversationId: conversationId || null,
        reason: reason || 'Reported from chat'
      }
    })

    return NextResponse.json(report)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to report user' }, { status: 500 })
  }
}
