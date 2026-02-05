import { Coffee } from "./coffee.interface";
import { SimpleCoffee } from "./simple-coffee";
import { MilkDecorator } from "./milk-decorator";

let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);

console.log(`Cost: ${coffee.cost()}`);
console.log(`Description: ${coffee.description()}`);