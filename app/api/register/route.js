import prisma from '../../../lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request) {
  const { email, password, name } = await request.json()
  const hashedPassword = bcrypt.hashSync(password, 10)
  try {
    await prisma.$transaction(async (tx) => {
      const agg = await tx.user.aggregate({
        _max: { uid: true }
      })
      const base = 500000000
      const nextUid = (agg?._max?.uid ?? (base - 1)) + 1

      await tx.user.create({
        data: { email, password: hashedPassword, name, uid: nextUid }
      })
    })
    return new Response(JSON.stringify({ message: 'User created' }), { status: 201 })
  } catch (error) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 })
  }
}
