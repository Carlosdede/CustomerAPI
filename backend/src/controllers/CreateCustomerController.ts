import type { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerServices } from "../services/CreateCustomerServices.js";

class CreateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const customerService = new CreateCustomerServices();

    const customer = await customerService.execute(request.body);

    reply.send(customer);
  }
}

export { CreateCustomerController };
