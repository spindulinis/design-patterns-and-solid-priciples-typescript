import { UIFactory } from "../interfaces/ui-factory.interface";
import { Button } from "../interfaces/button.interface";
import { DarkButton } from "./dark-button";
import { Checkbox } from "../interfaces/checkbox.interface";
import { DarkCheckbox } from "./dark-checkbox";

export class DarkThemeFactory implements UIFactory {
  createButton(): Button {
    return new DarkButton();
  }

  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}