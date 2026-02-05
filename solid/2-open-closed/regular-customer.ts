import { Customer } from "./customer.interface";

export class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }
}