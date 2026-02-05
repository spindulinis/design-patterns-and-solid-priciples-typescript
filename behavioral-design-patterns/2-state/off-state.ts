import { LightState } from "./light-state.interface";
import { LightSwitch } from "./light-switch";
import { OnState } from "./on-state";

export class OffState implements LightState {
  public switchState(lightSwitch: LightSwitch): void {
    console.log("Light state is Off. Turning On ...");
    lightSwitch.setState(new OnState());
  }
}