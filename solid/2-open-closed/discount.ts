import { Customer } from "./customer.interface";

export class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}