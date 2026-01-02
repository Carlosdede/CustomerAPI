import { Customer } from "../models/Customer.js";

class ListCustomersService {
  async execute() {
    const customers = await Customer.find();
    return customers;
  }
}
export { ListCustomersService };
