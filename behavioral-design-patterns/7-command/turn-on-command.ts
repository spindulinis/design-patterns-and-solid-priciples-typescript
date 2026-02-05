import { Command } from "./command.interface";
import { Light } from "./light";

export class TurnOnCommand implements Command {
  constructor(private light: Light) {
  }

  public execute(): void {
    this.light.turnOn();
  }

  public undo(): void {
    this.light.turnOff();
  }
}