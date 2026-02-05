import { Command } from "./command.interface";
import { Light } from "./light";

export class TurnOffCommand implements Command {
  constructor(private light: Light) {
  }

  public execute(): void {
    this.light.turnOff();
  }

  public undo(): void {
    this.light.turnOn();
  }
}