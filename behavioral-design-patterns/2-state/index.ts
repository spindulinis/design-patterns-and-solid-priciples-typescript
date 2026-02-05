import { LightSwitch } from "./light-switch";
import { OffState } from "./off-state";

const lightSwitch = new LightSwitch(new OffState());
lightSwitch.press();
lightSwitch.press();