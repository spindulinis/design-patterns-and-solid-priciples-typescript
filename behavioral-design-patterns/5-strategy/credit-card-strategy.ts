import { PaymentStrategy } from "./payment-strategy.interface";

export class CreditCardStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}