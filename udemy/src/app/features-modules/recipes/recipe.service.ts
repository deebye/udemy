import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from './recipe.model';

import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel',
      'Super tasty Schnitzel that is just awesome!',
      'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      [ 
        new Ingredient('Meat',1),
        new Ingredient('Fries',20),
      ]
    ),
    new Recipe(
      'Big Fat Burger',
      'What else do I need to say',
      'https://img.theculturetrip.com/wp-content/uploads/2016/06/the-ship-indian-summer-burger.jpg',
      [
        new Ingredient('Buns',2),
        new Ingredient('Meat',1),]
    ),
];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice()
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.ingredientsAdd(ingredients);
  }


}
