import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe1','This 1 is a test','https://images.immediate.co.uk/production/volatile/sites/2/2019/05/Caramalised-pork-ribs-10376c4.jpg?quality=90&crop=14px,1640px,5942px,2556px&resize=556,505'),
    new Recipe('A Test Recipe2','This 2 is a test','https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'),
    new Recipe('A Test Recipe3','This 3 is a test','https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014__340.jpg')
  ];

  constructor() { }

  getRecipes(){
    return this.recipes.slice()
  }


}
