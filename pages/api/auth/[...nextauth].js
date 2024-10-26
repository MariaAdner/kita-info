import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import clientPromise from "../../../db/mongodb";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import dbConnect from "../../../db/connect";
import User from "../../../db/models/User";

import { verifyPassword } from "../../../db/password";

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        await dbConnect();

        if (credentials == null) return null;

        try {
          const user = await User.findOne({
            name: credentials.name,
          });

          if (user) {
            const isValid = await verifyPassword(
              credentials.password,
              user.password
            );
            if (isValid) {
              return user;
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
});
