import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";
import "dotenv/config";
import { connectMongo } from "./database/mongoose.js";

const app = Fastify({ logger: true });
app.setErrorHandler((error: any, request, reply) => {
  reply.code(400).send({ message: error.message });
});
const start = async () => {
  try {
    await connectMongo();
    await app.register(routes);
    await app.register(cors, {
      origin: "http://localhost:5173",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    });

    await app.listen({ port: 3333 });
  } catch (err) {
    process.exit(1);
  }
};

start();
