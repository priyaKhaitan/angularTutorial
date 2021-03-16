import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Array<Recipe> = [
  new Recipe(
  'Palak Paneer',
  'An Indian curry made out of spinach and cottage cheese',
  'https://upload.wikimedia.org/wikipedia/commons/8/8d/Palak_Paneer_%28Cottage_cheese_in_spinach_gravy%29.jpg'
  ),
  new Recipe(
    'Palak Paneer',
    'An Indian curry made out of spinach and cottage cheese',
    'https://upload.wikimedia.org/wikipedia/commons/8/8d/Palak_Paneer_%28Cottage_cheese_in_spinach_gravy%29.jpg'
    ),
];

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(recipe: Recipe){
  this.recipeWasSelected.emit(recipe); // emitting value to recipe component.
  }
}
