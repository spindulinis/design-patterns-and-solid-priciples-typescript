import { Product } from "./product";

export class ProductBuilder {
  private title!: string;
  private price!: number;
  private description?: string;
  private discountRate?: number;
  private category?: string;

  setTitle(title: string): this {
    this.title = title;
    return this;
  }

  setPrice(price: number): this {
    this.price = price;
    return this;
  }

  setDescription(description: string): this {
    this.description = description;
    return this;
  }

  setDiscount(rate: number): this {
    this.discountRate = rate;
    return this;
  }

  setCategory(category: string): this {
    this.category = category;
    return this;
  }

  build(): Product {
    return new Product(
      this.title,
      this.price,
      this.description,
      this.discountRate,
      this.category
    );
  }
}