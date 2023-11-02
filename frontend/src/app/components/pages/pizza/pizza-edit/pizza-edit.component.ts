import { Component } from '@angular/core';
import {PizzaService} from "../../../../core/services/pizza.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Pizza} from "../../../../core/models/pizza";
import {Ingredient} from "../../../../core/models/ingredient";
import {IngredientService} from "../../../../core/services/ingredient.service";

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.sass']
})
export class PizzaEditComponent {

  item: Pizza
  ingredients: Ingredient[] = [];
  ingredientsToAdd: Ingredient[] = [];
  nullIngredient: Ingredient = {id: 0, name: 'Select Ingredient', image: ''} as unknown as Ingredient
  selectedIngredient: any = this.nullIngredient;

  constructor(
    private pizzaService: PizzaService,
    private ingredientService: IngredientService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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
      this.setIngredientsToAdd([this.nullIngredient, ...this.ingredients])
    })
  }

  setIngredientsToAdd(ingredients: Ingredient[], skip: Ingredient[] = []) {
    this.ingredientsToAdd = ingredients.filter(i => !skip.includes(i))
  }

  save() {
    this.pizzaService.updatePizza(this.item).subscribe(data => {
      this.router.navigate(['/pages/pizza/show', data.id])
    })
  }

  addIngredient(event: any) {
    this.item.ingredients?.push(this.selectedIngredient)
    this.selectedIngredient = this.nullIngredient
    this.setIngredientsToAdd([this.nullIngredient, ...this.ingredients], this.item.ingredients)
  }

  removeIngredient(ingredient: Ingredient) {
    this.item.ingredients = this.item.ingredients?.filter(i => i.id !== ingredient.id) ?? []
  }

  selectIngredient($event: Event) {
    this.selectedIngredient = this.ingredients.find(i => i.id === parseInt(($event.target as HTMLSelectElement).value))
  }
}
