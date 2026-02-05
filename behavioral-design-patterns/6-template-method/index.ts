import { CakeRecipe } from "./cake-recipe.abstract";
import { ChocolateCake } from "./chocolate-cake";
import { VanillaCake } from "./vanila-cake";

function bakeCake(cake: CakeRecipe) {
  cake.bakeCake();
}

console.log("Baking a chocolate cake");
bakeCake(new ChocolateCake());

console.log("Baking a vanilla cake");
bakeCake(new VanillaCake());