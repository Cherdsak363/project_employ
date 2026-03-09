import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../../lib/db'
import bcrypt from 'bcryptjs'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: { email: credentials.email }
        })
        if (user && bcrypt.compareSync(credentials.password, user.password)) {
          return { 
            id: user.id, 
            email: user.email, 
            name: user.name, 
            avatarPath: user.avatarPath,
            image: user.avatarPath
          }
        }
        return null
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.id = user.id
        token.name = user.name
        token.email = user.email
        token.avatarPath = user.avatarPath
        token.picture = user.avatarPath
      }

      if (trigger === 'update' && session?.user) {
        if (session.user.name !== undefined) token.name = session.user.name
        if (session.user.avatarPath !== undefined) token.avatarPath = session.user.avatarPath
        if (session.user.avatarPath !== undefined) token.picture = session.user.avatarPath
      }

      return token
    },
    async session({ session, token }) {
      if (session?.user) {
        const resolvedId = token?.id || token?.sub
        if (resolvedId) session.user.id = resolvedId
      }

      if (session?.user && token?.name !== undefined) {
        session.user.name = token.name
      }

      if (session?.user && token?.email) {
        session.user.email = token.email
      }

      if (session?.user && token?.avatarPath !== undefined) {
        session.user.avatarPath = token.avatarPath
      }

      if (session?.user && token?.picture !== undefined) {
        session.user.image = token.picture
      }

      return session
    }
  },
  pages: {
    signIn: '/signin'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
