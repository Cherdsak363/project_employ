import prisma from '../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    const conversations = await prisma.conversation.findMany({
      where: {
        participants: {
          some: { userId },
        },
      },
      orderBy: { lastMessageAt: 'desc' },
      include: {
        participants: {
          include: {
            user: { select: { id: true, name: true, email: true, avatarPath: true } },
          },
        },
        nicknames: {
          where: { userId },
        },
        messages: {
          orderBy: { createdAt: 'desc' },
          take: 1,
          include: { sender: { select: { id: true, name: true, avatarPath: true } } },
        },
        _count: {
          select: {
            messages: {
              where: {
                senderId: { not: userId },
                readAt: null,
              },
            },
          },
        },
      },
    })

    const mapped = conversations.map((c) => {
      const other = c.participants.map((p) => p.user).find((u) => u.id !== userId)
      const last = c.messages[0]
      const customNickname = c.nicknames.find(n => n.targetUserId === other?.id)?.nickname

      return {
        id: c.id,
        lastMessageAt: c.lastMessageAt,
        createdAt: c.createdAt,
        unreadCount: c._count.messages,
        otherUser: other
          ? {
              id: other.id,
              name: customNickname || other.name,
              email: other.email,
              avatarPath: other.avatarPath,
            }
          : null,
        lastMessage: last
          ? {
              id: last.id,
              body: last.body,
              createdAt: last.createdAt,
              senderId: last.senderId,
            }
          : null,
      }
    })

    return NextResponse.json(mapped)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch conversations' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json().catch(() => null)
    if (!body) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
    }

    const otherUserId = typeof body.otherUserId === 'string' ? body.otherUserId.trim() : ''
    if (!otherUserId) {
      return NextResponse.json({ error: 'Missing otherUserId' }, { status: 400 })
    }

    const userId = session.user.id;
    console.log('API POST /api/conversations:', { userId, otherUserId });

    if (otherUserId === userId) {
      console.error('Chat error: otherUserId is same as current userId');
      return NextResponse.json({ error: 'Invalid otherUserId (Self-chat not allowed)' }, { status: 400 })
    }

    // Check if user exists
    const otherUser = await prisma.user.findUnique({
      where: { id: otherUserId },
      select: { id: true }
    });

    if (!otherUser) {
      return NextResponse.json({ error: 'Target user not found' }, { status: 404 });
    }

    const existing = await prisma.conversation.findFirst({
      where: {
        AND: [
          { participants: { some: { userId: userId } } },
          { participants: { some: { userId: otherUserId } } },
        ],
      },
      select: { id: true },
    })

    if (existing) {
      console.log('Found existing conversation:', existing.id);
      return NextResponse.json({ id: existing.id }, { status: 200 })
    }

    console.log('Creating new conversation between', userId, 'and', otherUserId);
    const created = await prisma.conversation.create({
      data: {
        clientId: userId,
        artistId: otherUserId,
        participants: {
          create: [
            { userId: userId },
            { userId: otherUserId }
          ],
        },
      },
      select: { id: true },
    })

    return NextResponse.json({ id: created.id }, { status: 201 })
  } catch (error) {
    console.error('CRITICAL: Failed to create conversation:', error);
    return NextResponse.json({ 
      error: 'Failed to create conversation',
      details: error.message 
    }, { status: 500 })
  }
}
