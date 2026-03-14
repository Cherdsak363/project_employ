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
      return NextResponse.json({ error: 'Missing target user ID' }, { status: 400 })
    }

    const { targetUserId } = body

    // Check if block already exists
    const existingBlock = await prisma.block.findUnique({
      where: {
        blockerId_blockedId: {
          blockerId: userId,
          blockedId: targetUserId
        }
      }
    })

    if (existingBlock) {
      // Unblock
      await prisma.block.delete({
        where: { id: existingBlock.id }
      })
      return NextResponse.json({ blocked: false })
    } else {
      // Block
      await prisma.block.create({
        data: {
          blockerId: userId,
          blockedId: targetUserId,
          conversationId: conversationId
        }
      })
      return NextResponse.json({ blocked: true })
    }
  } catch (error) {
    console.error('Block error:', error)
    return NextResponse.json({ error: 'Failed to update block status' }, { status: 500 })
  }
}
