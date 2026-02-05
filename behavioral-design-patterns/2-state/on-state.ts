import { LightState } from "./light-state.interface";
import { LightSwitch } from "./light-switch";
import { OffState } from "./off-state";

export class OnState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is On. Turning Off ...");
    lightSwitch.setState(new OffState());
  }
}