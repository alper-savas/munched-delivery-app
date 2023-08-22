import { connectDB } from "@/utilities/db";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return;
  }
  const client = await connectDB();

  const db = client.db();

  const collection = db.collection("profiles");

  const users = await collection.find().toArray();

  res.status(201).json({ message: "Found users", users: users });

  client.close();
};

export default handler;
