import prisma from '../../../lib/db'
import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
  try {
    const arts = await prisma.art.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarPath: true,
          }
        }
      }
    })
    return new Response(JSON.stringify(arts), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch arts' }), { status: 500 })
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
    }

    const body = await request.json().catch(() => null)
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ error: 'Invalid body' }), { status: 400 })
    }

    const title = typeof body.title === 'string' ? body.title.trim() : ''
    const description = typeof body.description === 'string' ? body.description.trim() : null
    const image = typeof body.image === 'string' ? body.image.trim() : ''
    const contact = typeof body.contact === 'string' ? body.contact.trim() : null

    const rawPrice = body.price
    const price = rawPrice === null || rawPrice === undefined || rawPrice === ''
      ? null
      : Number(rawPrice)

    if (!title) {
      return new Response(JSON.stringify({ error: 'Invalid title' }), { status: 400 })
    }

    if (!image) {
      return new Response(JSON.stringify({ error: 'Invalid image' }), { status: 400 })
    }

    if (price !== null && Number.isNaN(price)) {
      return new Response(JSON.stringify({ error: 'Invalid price' }), { status: 400 })
    }

    const art = await prisma.art.create({
      data: {
        title,
        description,
        price,
        image,
        contact,
        artistId: session.user.id,
      },
      include: {
        artist: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarPath: true,
          }
        }
      }
    })
    return new Response(JSON.stringify(art), { status: 201 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create art' }), { status: 500 })
  }
}
