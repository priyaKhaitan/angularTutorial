import { AfterViewChecked, Component, Input, OnInit, ViewChild } from '@angular/core';
import { DropdownDirective } from 'src/app/shared/dropdown.directive';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  canOpen = false;
  @Input()
  recipe!: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void { 
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
