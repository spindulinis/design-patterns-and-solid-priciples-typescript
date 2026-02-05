import { PaymentStrategy } from "./payment-strategy.interface";

export class PaypalStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}