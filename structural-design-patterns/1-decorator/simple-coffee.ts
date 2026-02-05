import { Coffee } from "./coffee.interface";

export class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }

  public description(): string {
    return "Simple Coffee";
  }
}