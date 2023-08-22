import { MongoClient } from "mongodb";

export const connectDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://alpersavas:6AKAqR9AipcHBhe6@cluster0.zikviqh.mongodb.net/munched?retryWrites=true&w=majority"
  );

  return client;
};
