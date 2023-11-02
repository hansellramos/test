import { Component } from '@angular/core';
import {PizzaService} from "../../../../core/services/pizza.service";
import {Ingredient} from "../../../../core/models/ingredient";
import {Pizza} from "../../../../core/models/pizza";

@Component({
  selector: 'app-pizza-index',
  templateUrl: './pizza-index.component.html',
  styleUrls: ['./pizza-index.component.sass']
})
export class PizzaIndexComponent {

  pizzas: Pizza[] = [];
  constructor(private pizzaService: PizzaService) { }

  pizzas$ = this.pizzaService.getPizzas().subscribe(data => {
    this.pizzas = data.map((pizza: any) => {
      return new Pizza(
        pizza.id,
        pizza.name,
        pizza.description,
        pizza.ingredients.map((ingredient: any) => new Ingredient(
          ingredient.id,
          ingredient.name,
          parseFloat(ingredient.price),
          ingredient.unit,
          ingredient.icon
        )),
        pizza.image
      )
    });
  });
}
