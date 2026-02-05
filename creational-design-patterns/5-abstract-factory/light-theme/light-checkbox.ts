import { Checkbox } from "../interfaces/checkbox.interface";

export class LightCheckbox implements Checkbox {
  render(): void {
    console.log('Render Light Checkbox');
  }
}