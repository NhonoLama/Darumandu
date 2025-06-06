import NextAuth from 'next-auth';
import {PrismaAdapter} from '@auth/prisma-adapter';
import { prisma } from './db/prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compareSync } from 'bcrypt-ts-edge';
import type { NextAuthConfig } from 'next-auth';

export const config = {
    pages:{
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session:{
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter:PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials:{
                email: {type: 'email', label: 'Email'},
                password: {type: 'password', label: 'Password'}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password are required');
                }

                const user = await prisma.user.findUnique({
                    where: { email: credentials.email as string }
                });

                if (user && user?.password) {
                    const isMatch = compareSync(credentials.password as string , user.password);
                    if (isMatch) {
                        return { id: user.id, name: user.name, email: user.email, role: user.role };
                    }
                }
                return null;
            }
           
        })
    ],
    callbacks:{
        async session({session, user ,trigger , token}: any) {
            session.user.id = token.sub;

            //if there is an update, set the user name
            if(trigger=== 'update' && user) {
                session.user.name = user.name;
            }
            return session;
        }
    }
} satisfies NextAuthConfig;

export const  {handlers,signIn,signOut,auth} = NextAuth(config)

