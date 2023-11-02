import { Component } from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient";
import {IngredientService} from "../../../../core/services/ingredient.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-ingredient-show',
  templateUrl: './ingredient-show.component.html',
  styleUrls: ['./ingredient-show.component.sass']
})
export class IngredientShowComponent {

  item: Ingredient

  constructor(private ingredientService: IngredientService,
              private route: ActivatedRoute) {
    this.item = {} as unknown as Ingredient
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ingredientService.getIngredient(params['id']).subscribe(data => {
        this.item = new Ingredient(data.id, data.name, data.price, data.unit, data.icon)
      })
    })
  }

}
