import { CakeRecipe } from "./cake-recipe.abstract";

export class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour, eggs");
  }

  protected decorate(): void {
    console.log(" Decorating cake with chocolate");
  }
}