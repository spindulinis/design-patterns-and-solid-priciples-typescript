import { ProductPrototype } from "./product-prototype.abstract";

export class Product extends ProductPrototype {
  constructor(public title: string, public price: number, private category: string) {
    super(title, price);
  }

  clone(): Product {
    return new Product(this.title, this.price, this.category);
  }
}