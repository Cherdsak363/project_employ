import prisma from '../../../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

const isMember = async (conversationId, userId) => {
  const member = await prisma.conversationParticipant.findUnique({
    where: { conversationId_userId: { conversationId, userId } },
    select: { id: true },
  })
  return !!member
}

export async function GET(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await context.params
    const conversationId = params?.id
    if (!conversationId) {
      return NextResponse.json({ error: 'Missing conversation id' }, { status: 400 })
    }

    const userId = session.user.id
    if (!(await isMember(conversationId, userId))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const { searchParams } = new URL(request.url)
    const cursor = searchParams.get('cursor')
    const checkSeen = searchParams.get('checkSeen') === 'true'
    const takeRaw = Number(searchParams.get('take') || 50)
    const take = Number.isFinite(takeRaw) ? Math.min(100, Math.max(1, Math.trunc(takeRaw))) : 50

    if (checkSeen) {
      const messages = await prisma.message.findMany({
        where: {
          conversationId,
          senderId: userId,
          readAt: { not: null },
        },
        orderBy: { createdAt: 'desc' },
        take: 20,
        select: { id: true, readAt: true }
      })
      return NextResponse.json(messages)
    }

    const where = {
      conversationId,
      ...(cursor ? { createdAt: { gt: new Date(cursor) } } : {}),
    }

    const messages = await prisma.message.findMany({
      where,
      orderBy: { createdAt: 'asc' },
      take,
      include: { 
        sender: { select: { id: true, name: true, email: true, avatarPath: true } },
        attachments: true,
        conversation: {
          include: {
            nicknames: {
              where: { userId }
            }
          }
        }
      },
    })

    const mappedMessages = messages.map(m => {
      const customNickname = m.conversation.nicknames.find(n => n.targetUserId === m.senderId)?.nickname
      return {
        ...m,
        sender: {
          ...m.sender,
          name: customNickname || m.sender.name || m.sender.email
        },
        conversation: undefined // Remove extra data
      }
    })

    // Mark these messages as read if they are not from me
    const messageIdsToMark = messages
      .filter(m => m.senderId !== userId && !m.readAt)
      .map(m => m.id)

    if (messageIdsToMark.length > 0) {
      await prisma.message.updateMany({
        where: { id: { in: messageIdsToMark } },
        data: { readAt: new Date() }
      })
    }

    return NextResponse.json(mappedMessages)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 })
  }
}

export async function POST(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await context.params
    const conversationId = params?.id
    if (!conversationId) {
      return NextResponse.json({ error: 'Missing conversation id' }, { status: 400 })
    }

    const userId = session.user.id
    if (!(await isMember(conversationId, userId))) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    const body = await request.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const messageBody = typeof body.body === 'string' ? body.body.trim() : ''
    if (!messageBody) {
      return NextResponse.json({ error: 'Message body required' }, { status: 400 })
    }

    const created = await prisma.$transaction(async (tx) => {
      const msg = await tx.message.create({
        data: {
          conversationId,
          senderId: userId,
          body: messageBody,
        },
        include: { sender: { select: { id: true, name: true, avatarPath: true } } },
      })

      await tx.conversation.update({
        where: { id: conversationId },
        data: { lastMessageAt: msg.createdAt },
        select: { id: true },
      })

      return msg
    })

    return NextResponse.json(created, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
