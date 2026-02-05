import { Product } from './product';

const originalProduct = new Product('Product A', 1500, 'Digital');

const clonedProduct = originalProduct.clone();
clonedProduct.title = 'Product B';
clonedProduct.price = 100;

console.log(originalProduct);
console.log(clonedProduct);