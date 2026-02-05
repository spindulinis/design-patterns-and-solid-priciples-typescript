import { Product } from "./product.abstract";

export class RegularProduct extends Product {
  calculatePrice(): number {
    return this.price;
  }
}