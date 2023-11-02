import { Component } from '@angular/core';
import {PizzaService} from "../../../../core/services/pizza.service";

@Component({
  selector: 'app-pizza-index',
  templateUrl: './pizza-index.component.html',
  styleUrls: ['./pizza-index.component.sass']
})
export class PizzaIndexComponent {

  constructor(private pizzaService: PizzaService) { }

  pizzas$ = this.pizzaService.getPizzas();

}
