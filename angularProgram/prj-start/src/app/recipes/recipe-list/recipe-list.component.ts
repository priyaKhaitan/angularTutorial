import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes: Recipe[] = [
      new Recipe('Palak Paneer','Cottage Cheese with spinach','https://www.cookwithkushi.com/wp-content/uploads/2016/05/IMG_9736_.jpg')
    ]; //typescript now knows that only thing which will get stored in this
  //recipes property is the couple of recipe object.
  constructor() { }

  ngOnInit(): void {
  }

}
