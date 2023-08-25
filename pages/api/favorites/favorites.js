import { connectDB } from "@/utilities/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const client = await connectDB();

  const db = client.db();

  const collection = db.collection("profiles");

  const data = req.body;
  const { email, restObj } = data;

  const user = await collection.findOne({ email: email });

  const isRestExists = user.favorites.find((fav) => fav.name === restObj.name);

  if (isRestExists) {
    const update = await collection.updateOne(
      { email: email },
      { $pull: { favorites: { name: restObj.name } } }
    );
    res.status(201).json({ message: "Restaurant deleted!" });
  } else {
    const update = await collection.updateOne(
      { email: email },
      { $push: { favorites: restObj } }
    );
    res.status(201).json({ message: "Restaurant created!" });
  }
  client.close();
};

export default handler;
