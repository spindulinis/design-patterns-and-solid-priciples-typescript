import { UIFactory } from "../interfaces/ui-factory.interface";
import { Button } from "../interfaces/button.interface";
import { LightButton } from "./light-button";
import { Checkbox } from "../interfaces/checkbox.interface";
import { LightCheckbox } from "./light-checkbox";

export class LightThemeFactory implements UIFactory {
  createButton(): Button {
    return new LightButton();
  }

  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}