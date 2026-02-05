import { Checkbox } from "../interfaces/checkbox.interface";

export class DarkCheckbox implements Checkbox {
  render(): void {
    console.log('Render Dark Checkbox');
  }
}