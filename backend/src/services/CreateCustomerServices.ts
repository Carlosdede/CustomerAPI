import { Customer } from "../models/Customer.js";

class CreateCustomerServices {
  async execute(data: any) {
    console.log("essa rota foi chamaada");
    return await Customer.create(data);
  }
}

export { CreateCustomerServices };
