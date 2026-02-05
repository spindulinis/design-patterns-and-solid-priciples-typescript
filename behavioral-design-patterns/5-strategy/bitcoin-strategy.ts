import { PaymentStrategy } from "./payment-strategy.interface";

class BitcoinStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}