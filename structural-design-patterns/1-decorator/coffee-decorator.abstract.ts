import { Coffee } from "./coffee.interface";

export abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {
  }

  abstract cost(): number;

  abstract description(): string;
}