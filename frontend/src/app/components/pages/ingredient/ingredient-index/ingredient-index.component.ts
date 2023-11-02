import { Component } from '@angular/core';
import {IngredientService} from "../../../../core/services/ingredient.service";

@Component({
  selector: 'app-ingredient-index',
  templateUrl: './ingredient-index.component.html',
  styleUrls: ['./ingredient-index.component.sass']
})
export class IngredientIndexComponent {

  constructor(private ingredientService: IngredientService) { }

  ingredients$ = this.ingredientService.getIngredients();

}
