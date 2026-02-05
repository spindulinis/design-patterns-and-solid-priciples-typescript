import { ProductBuilder } from "./product.builder";

const product = new ProductBuilder()
  .setTitle('Product Title')
  .setPrice(100)
  .setDescription('Best product ever')
  .setDiscount(0.1)
  .setCategory('Digital')
  .build();

console.log(product);