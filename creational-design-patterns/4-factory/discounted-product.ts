import { Product } from "./product.abstract";

export class DiscountedProduct extends Product {
  constructor(public title: string, public price: number, private discountRate: number) {
    super(title, price);
  }

  calculatePrice(): number {
    return this.price * (1 - this.discountRate);
  }
}