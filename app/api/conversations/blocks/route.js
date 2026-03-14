import prisma from '../../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../auth/[...nextauth]/route'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const userId = session.user.id

    // Users blocked by me
    const blockedByMe = await prisma.block.findMany({
      where: { blockerId: userId },
      select: { blockedId: true }
    })

    // Users blocking me
    const blockingMe = await prisma.block.findMany({
      where: { blockedId: userId },
      select: { blockerId: true }
    })

    return NextResponse.json({
      blockedByMe: blockedByMe.map(b => b.blockedId),
      blockingMe: blockingMe.map(b => b.blockerId)
    })
  } catch (error) {
    console.error('Blocks fetch error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
