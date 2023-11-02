import { Component } from '@angular/core';
import {PizzaService} from "../../../../core/services/pizza.service";
import {Pizza} from "../../../../core/models/pizza";
import {IngredientService} from "../../../../core/services/ingredient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Ingredient} from "../../../../core/models/ingredient";

@Component({
  selector: 'app-pizza-show',
  templateUrl: './pizza-show.component.html',
  styleUrls: ['./pizza-show.component.sass']
})
export class PizzaShowComponent {

  item: Pizza
  ingredients: Ingredient[] = [];
  constructor(private pizzaService: PizzaService,
              private ingredientService: IngredientService,
              private route: ActivatedRoute) {
    this.item = {} as unknown as Pizza
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pizzaService.getPizza(params['id']).subscribe(data => {
        this.item = new Pizza(data.id, data.name, data.description, data.ingredients, data.image)
      })
    })
    this.ingredientService.getIngredients().subscribe(data => {
      this.ingredients = data
    })
  }

}
