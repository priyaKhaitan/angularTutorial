import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
  })
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
 private recipes: Array<Recipe> = [ 
        new Recipe(
        'Palak Paneer',
        'An Indian curry made out of spinach and cottage cheese',
        'https://upload.wikimedia.org/wikipedia/commons/8/8d/Palak_Paneer_%28Cottage_cheese_in_spinach_gravy%29.jpg',
        [
          new Ingredient('palak', 100),
          new Ingredient('paneer', 100)
        ]
        ),
        new Recipe(
          'Burger',
          'A snack with patty, buns, cheese and lettuce leaves',
          'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
          [
            new Ingredient('bread', 1),
            new Ingredient('patty', 1)
          ]
          ),
      ];
constructor(private slService: ShoppingListService) {}

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredientFromRecipes(ingredients);
      }
}