import { Customer } from "./customer.interface";

export class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }
}