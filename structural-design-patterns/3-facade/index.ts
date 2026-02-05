import { Grinder } from "./grinder";
import { Boiler } from "./boiler";
import { Brewer } from "./brewer";
import { CoffeeMakerFacade } from "./coffee-maker-facade";

const grinder = new Grinder();
const boiler = new Boiler();
const brewer = new Brewer();

const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
coffeeMaker.makeCoffee();