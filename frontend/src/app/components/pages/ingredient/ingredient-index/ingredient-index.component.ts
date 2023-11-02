import { Component } from '@angular/core';
import {IngredientService} from "../../../../core/services/ingredient.service";
import {Ingredient} from "../../../../core/models/ingredient";

@Component({
  selector: 'app-ingredient-index',
  templateUrl: './ingredient-index.component.html',
  styleUrls: ['./ingredient-index.component.sass']
})
export class IngredientIndexComponent {

  constructor(private ingredientService: IngredientService) { }

  ingredients: Ingredient[] = [];
  ingredients$ = this.ingredientService.getIngredients().subscribe(data => {
    this.ingredients = data.map((ingredient: any) => {
      return new Ingredient(
        ingredient.id,
        ingredient.name,
        parseFloat(ingredient.price),
        ingredient.unit,
        ingredient.icon
      )
    });
  });

}
