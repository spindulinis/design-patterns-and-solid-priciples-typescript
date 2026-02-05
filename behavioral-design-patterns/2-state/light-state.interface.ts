import { LightSwitch } from "./light-switch";

export interface LightState {
  switchState(lightSwitch: LightSwitch): void;
}