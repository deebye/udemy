import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is a test','https://images.immediate.co.uk/production/volatile/sites/2/2019/05/Caramalised-pork-ribs-10376c4.jpg?quality=90&crop=14px,1640px,5942px,2556px&resize=556,505'),
    new Recipe('A Test Recipe','This is a test','https://images.immediate.co.uk/production/volatile/sites/2/2019/05/Caramalised-pork-ribs-10376c4.jpg?quality=90&crop=14px,1640px,5942px,2556px&resize=556,505'),
    new Recipe('A Test Recipe','This is a test','https://images.immediate.co.uk/production/volatile/sites/2/2019/05/Caramalised-pork-ribs-10376c4.jpg?quality=90&crop=14px,1640px,5942px,2556px&resize=556,505')
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
