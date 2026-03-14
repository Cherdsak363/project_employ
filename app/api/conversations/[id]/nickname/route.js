import prisma from '../../../../../lib/db'
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
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const { nickname, targetUserId } = body

    // Handle name reset (empty string)
    if (nickname === '') {
      await prisma.nickname.deleteMany({
        where: {
          conversationId,
          userId,
          targetUserId
        }
      })
      return NextResponse.json({ success: true })
    }

    // Verify conversation membership
    const member = await prisma.conversationParticipant.findUnique({
      where: { conversationId_userId: { conversationId, userId } }
    })
    if (!member) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const updatedNickname = await prisma.nickname.upsert({
      where: {
        conversationId_userId_targetUserId: {
          conversationId,
          userId,
          targetUserId
        }
      },
      update: { nickname },
      create: {
        conversationId,
        userId,
        targetUserId,
        nickname
      }
    })

    return NextResponse.json(updatedNickname)
  } catch (error) {
    console.error('Nickname error:', error)
    return NextResponse.json({ error: 'Failed to update nickname' }, { status: 500 })
  }
}
