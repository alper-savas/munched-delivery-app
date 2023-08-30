import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = await MongoClient.connect(
    `mongodb+srv://alpersavas:${process.env.PASSWORD}@cluster0.zikviqh.mongodb.net/munched?retryWrites=true&w=majority`
  );

  return client;
};
