import { CakeRecipe } from "./cake-recipe.abstract";

export class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, eggs");
  }
}