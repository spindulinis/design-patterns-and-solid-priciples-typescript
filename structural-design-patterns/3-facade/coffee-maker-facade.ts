import { Grinder } from "./grinder";
import { Boiler } from "./boiler";
import { Brewer } from "./brewer";

export class CoffeeMakerFacade {
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {
  }

  public makeCoffee() {
    this.grinder.grindBeads();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The Coffee is ready");
  }
}