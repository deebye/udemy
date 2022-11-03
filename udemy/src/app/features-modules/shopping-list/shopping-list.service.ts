import { EventEmitter, Injectable, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  constructor() { }

  ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  ingredientAdd(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.getIngredients());
  }

}
