import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
private ingredients: Array<Ingredient> = [
        new Ingredient('Apples', 5),
        new Ingredient('Banana', 10),
      ];

      getIngredients() {
        return this.ingredients.slice();
      }

      addIngredient(ingredient: Ingredient) { // here we have use Ingredient and not Ingredient beacuse shopping-edit passes the object.
       this.ingredients.push(ingredient);
       this.ingredientChanged.emit(this.ingredients.slice());
      }

      addIngredientFromRecipes(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
      }
}