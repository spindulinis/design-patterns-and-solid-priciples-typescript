import { RegularProduct } from "./regular-product";
import { Product } from "./product.abstract";
import { DiscountedProduct } from "./discounted-product";

export class ProductFactory {
  static createProduct(
    type: 'regular' | 'discounted',
    title: string,
    price: number,
    discountRate?: number,
  ): Product {
    switch (type) {
      case 'regular':
        return new RegularProduct(title, price);
      case 'discounted':
        if (discountRate === undefined) {
          throw new Error('Discount rate is required for discounted product');
        }
        return new DiscountedProduct(title, price, discountRate);
    }
  }
}