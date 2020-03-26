import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe 1', 'This is simply a test', 'data:image/jpeg;base64,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', [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    // tslint:disable-next-line:max-line-length
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg', [new Ingredient('Buns', 1), new Ingredient('Meat', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }


  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number){
    return this.recipes.slice()[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // for (const ing of ingredients) {
    //   this.shoppingListService.addIngredient(ing);
    // }
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

}
