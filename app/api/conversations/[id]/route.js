import prisma from '../../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function DELETE(request, context) {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const params = await context.params
    const conversationId = params?.id
    const userId = session.user.id

    // Check if participant
    const member = await prisma.conversationParticipant.findUnique({
      where: { conversationId_userId: { conversationId, userId } }
    })

    if (!member) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // We delete for everyone for now (as per simple requirement)
    // Or we could implement "hide for me" logic, but "Delete Chat" usually means the whole thing
    await prisma.conversation.delete({
      where: { id: conversationId }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete chat error:', error)
    return NextResponse.json({ error: 'Failed to delete chat' }, { status: 500 })
  }
}
