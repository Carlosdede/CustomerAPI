import { Customer } from "../models/Customer.js";

interface DeletecustomerProps {
  id: String;
}

class DeleteCustomerService {
  async execute({ id }: DeletecustomerProps) {
    if (!id) throw new Error("ID não informado");

    const deleted = await Customer.findByIdAndDelete(id);
    if (!deleted) {
      throw new Error("Cliente não encontrado");
    }
    return deleted;
  }
}

export { DeleteCustomerService };
