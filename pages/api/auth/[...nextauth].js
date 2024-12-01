import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../db/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";
import { verifyPassword } from "../../../db/password";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        await dbConnect();

        if (credentials == null) return null;

        try {
          const user = await User.findOne({
            email: credentials.email,
          });

          if (user) {
            const isValid = await verifyPassword(
              credentials.password,
              user.password
            );
            if (isValid) {
              return {
                name: user.name,
                email: user.email,
                id: user.id,
                queries: user.queries,
              };
            } else {
              throw new Error("Email or password is incorrect");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.access_token;
        token.id = user.id;
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.id;

        return session;
      } else {
        return null;
      }
    },
  },
};

export default NextAuth(authOptions);
