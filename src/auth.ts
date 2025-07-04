import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { db } from "./db";
import { admins } from "./db/schema";
import { eq } from "drizzle-orm";

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(creds) {
        if (!creds) return null;

        const [admin] = await db
          .select()
          .from(admins)
          .where(eq(admins.username, creds.username));

        if (admin && bcrypt.compareSync(creds.password, admin.passwordHash)) {
          return { id: String(admin.id), name: admin.username };
        }
        return null;
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
});
