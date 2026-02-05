import { UIFactory } from "./interfaces/ui-factory.interface";
import { LightThemeFactory } from "./light-theme/light-theme-factory";
import { DarkThemeFactory } from "./dark-theme/dark-theme-factory";

function renderUI(factory: UIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox();

  button.render();
  checkbox.render();
}

renderUI(new LightThemeFactory());
renderUI(new DarkThemeFactory());