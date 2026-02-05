import { CoffeeDecorator } from "./coffee-decorator.abstract";
import { Coffee } from "./coffee.interface";

export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }

  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}