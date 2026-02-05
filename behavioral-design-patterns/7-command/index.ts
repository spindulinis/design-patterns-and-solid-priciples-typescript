import { SimpleRemoteControl } from "./simple-remote-control";
import { Light } from "./light";
import { TurnOnCommand } from "./turn-on-command";
import { TurnOffCommand } from "./turn-off-command";

const remote: SimpleRemoteControl = new SimpleRemoteControl();
const light: Light = new Light();

// Turning On The Light
remote.setCommand(new TurnOnCommand(light));
remote.buttonWasPressed();

// Turning Off the Light
remote.setCommand(new TurnOffCommand(light));
remote.buttonWasPressed();

// Undo last operation
remote.undoButtonWasPressed();

// Create a command que
remote.setCommand(new TurnOnCommand(light));
remote.setCommand(new TurnOffCommand(light));

while (remote.hasCommands()) {
  remote.buttonWasPressed();
}