import { PaymentStrategy } from "./payment-strategy.interface";

export class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {
  }

  public setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public addToCart(value: number): void {
    this.amount += value;
  }

  public checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}