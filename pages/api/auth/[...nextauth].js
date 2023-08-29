import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/utilities/db";
import { verifyPassword } from "@/utilities/auth";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const client = await connectDB();

        const userCollection = client.db().collection("profiles");

        const user = await userCollection.findOne({ email: credentials.email });

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }

        const isValid = await verifyPassword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Password is incorrect!");
        }

        client.close();

        return {
          email: user.email,
          street: user.street,
          house: user.house,
          postcode: user.postcode,
          city: user.city,
        };
      },
    }),
  ],
  secret: "anything",
});
