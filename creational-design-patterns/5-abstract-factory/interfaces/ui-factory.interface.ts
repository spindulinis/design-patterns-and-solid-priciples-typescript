import { Button } from "./button.interface";
import { Checkbox } from "./checkbox.interface";

export interface UIFactory {
  createButton(): Button;

  createCheckbox(): Checkbox;
}