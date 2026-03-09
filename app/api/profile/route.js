import { getServerSession } from 'next-auth'
import { authOptions } from '../auth/[...nextauth]/route'
import prisma from '../../../lib/db'

export async function GET() {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { id: true, uid: true, email: true, name: true, firstName: true, lastName: true, phone: true, address: true, avatarPath: true, bannerPath: true, socialLinks: true, createdAt: true }
  })

  if (!user) {
    return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 })
  }

  return new Response(JSON.stringify({ user }), { status: 200 })
}

export async function PUT(request) {
  const session = await getServerSession(authOptions)

  if (!session?.user?.id) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const { name, firstName, lastName, password, phone, address, avatarPath, bannerPath, socialLinks } = await request.json()

  if (name !== undefined && typeof name !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid name' }), { status: 400 })
  }

  if (firstName !== undefined && typeof firstName !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid firstName' }), { status: 400 })
  }

  if (lastName !== undefined && typeof lastName !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid lastName' }), { status: 400 })
  }

  if (phone !== undefined && typeof phone !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid phone' }), { status: 400 })
  }

  if (address !== undefined && typeof address !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid address' }), { status: 400 })
  }

  if (avatarPath !== undefined && typeof avatarPath !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid avatarPath' }), { status: 400 })
  }

  if (bannerPath !== undefined && typeof bannerPath !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid bannerPath' }), { status: 400 })
  }

  if (password !== undefined && typeof password !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 400 })
  }

  let sanitizedSocialLinks
  if (socialLinks === null || socialLinks === undefined) {
    sanitizedSocialLinks = undefined
  } else if (!Array.isArray(socialLinks)) {
    return new Response(JSON.stringify({ error: 'Invalid socialLinks' }), { status: 400 })
  } else {
    sanitizedSocialLinks = socialLinks
      .map((item) => {
        const type = typeof item?.type === 'string' ? item.type.trim() : ''
        const url = typeof item?.url === 'string' ? item.url.trim() : ''
        return { type, url }
      })
      .filter((item) => item.type || item.url)
  }

  if (password && password.length < 6) {
    return new Response(JSON.stringify({ error: 'Password too short' }), { status: 400 })
  }

  const data = {}
  if (name !== undefined) data.name = name
  if (firstName !== undefined) data.firstName = firstName
  if (lastName !== undefined) data.lastName = lastName
  if (phone !== undefined) data.phone = phone
  if (address !== undefined) data.address = address
  if (avatarPath !== undefined) data.avatarPath = avatarPath
  if (bannerPath !== undefined) data.bannerPath = bannerPath
  if (sanitizedSocialLinks !== undefined) data.socialLinks = sanitizedSocialLinks

  if (password) {
    const bcrypt = (await import('bcryptjs')).default
    data.password = bcrypt.hashSync(password, 10)
  }

  let updatedUser
  try {
    updatedUser = await prisma.user.update({
      where: { id: session.user.id },
      data,
      select: { id: true, uid: true, email: true, name: true, firstName: true, lastName: true, phone: true, address: true, avatarPath: true, bannerPath: true, socialLinks: true, createdAt: true }
    })
  } catch (e) {
    if (data.socialLinks !== undefined) {
      const fallbackData = { ...data }
      delete fallbackData.socialLinks
      updatedUser = await prisma.user.update({
        where: { id: session.user.id },
        data: fallbackData,
        select: { id: true, uid: true, email: true, name: true, firstName: true, lastName: true, phone: true, address: true, avatarPath: true, bannerPath: true, socialLinks: true, createdAt: true }
      })
    } else {
      throw e
    }
  }

  return new Response(JSON.stringify({ user: updatedUser }), { status: 200 })
}
