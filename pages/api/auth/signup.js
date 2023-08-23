import { connectDB } from "@/utilities/db";
import { hashPassword } from "@/utilities/auth";
import { isNumeric } from "@/utilities/helper";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }

  const data = req.body;

  const { name, email, password, street, house, postcode, city, favorites } =
    data;

  if (
    !name ||
    !name.trim().length === 0 ||
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7 ||
    !street ||
    street.trim().length === 0 ||
    !house ||
    house.trim().length === 0 ||
    !postcode ||
    postcode.trim().length !== 5 ||
    !isNumeric(postcode.trim()) ||
    !city ||
    city.trim().length === 0
  ) {
    res.status(422).json({ message: "Invalid input" });
    return;
  }

  const client = await connectDB();

  const db = client.db();

  const isUserExist = await db.collection("profiles").findOne({ email: email });

  if (isUserExist) {
    res.status(422).json({ message: "User already exists!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await db.collection("profiles").insertOne({
    name: name,
    email: email,
    password: hashedPassword,
    street: street,
    house: house,
    postcode: postcode,
    city: city,
    favorites: favorites,
  });

  res.status(201).json({ message: "User created!" });
  client.close();
};

export default handler;
