import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe | undefined;
  // isRecipeSelected = false;
  constructor() { }

  ngOnInit(): void {
  }
  // onSelectedRecipe($event: Recipe){
  //   this.selectedRecipe = $event;
  //   this.isRecipeSelected = true;
  // }
}
