import mongoose from "mongoose";

export async function connectMongo() {
  const uri = process.env.MONGO_URL;
  if (!uri) throw new Error("MONGO_URL não definida no .env");

  await mongoose.connect(uri);
  console.log("MongoDB conectado ao mongoose");
}
