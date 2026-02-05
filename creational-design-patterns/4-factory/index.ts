import { ProductFactory } from "./product.factory";

const productA = ProductFactory.createProduct(
  'regular',
  'Product A',
  1500
);

const productB = ProductFactory.createProduct(
  'discounted',
  'Product B',
  2000,
  0.2
);

console.log(productA.calculatePrice());
console.log(productB.calculatePrice());