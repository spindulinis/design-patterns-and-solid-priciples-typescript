import { LightState } from "./light-state.interface";

export class LightSwitch {
  constructor(private state: LightState) {
  }

  public setState(state: LightState): void {
    this.state = state;
  }

  public press(): void {
    this.state.switchState(this);
  }
}