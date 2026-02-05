import { Command } from "./command.interface";

export class SimpleRemoteControl {
  private currentCommand!: Command;
  private undoCommand!: Command;
  private commandQueue: Command[] = [];

  public setCommand(command: Command): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  public buttonWasPressed(): void {
    if (this.commandQueue.length) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  public undoButtonWasPressed(): void {
    this.undoCommand.execute();
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}