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

          return { id: user.id, email: user.email, name: user.name }

        }

        return null

      }

    })

  ],

  session: {

    strategy: 'jwt'

  },

  callbacks: {

    async jwt({ token, user }) {

      if (user) {

        token.id = user.id

        token.name = user.name

        token.email = user.email

      }

      return token

    },

    async session({ session, token }) {

      if (session?.user && token?.id) {

        session.user.id = token.id

      }



      if (session?.user && token?.name !== undefined) {

        session.user.name = token.name

      }



      if (session?.user && token?.email) {

        session.user.email = token.email

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

