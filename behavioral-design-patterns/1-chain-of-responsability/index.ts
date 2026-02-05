import { Handler } from "./handler.interface";
import { MonkeyHandler } from "./monkey-handler";
import { SquirrelHandler } from "./squirrel-handler";
import { DogHandler } from "./dog-handler";

function clientCode(handler: Handler) {
  const foods = ["Nut", "Banana", "Cup Of Coffee", "MeatBall"];

  for (const food of foods) {
    console.log(`Who wants to eat ${food}`);
    const result = handler.handle(food);
    if (result) {
      console.log(result);
    } else {
      console.log(`${food} was left untouched `);
    }
  }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

// Chaining handlers
monkey.setNext(squirrel).setNext(dog);

clientCode(monkey);