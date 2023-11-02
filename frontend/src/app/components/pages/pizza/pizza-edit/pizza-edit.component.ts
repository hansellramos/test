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
        this.item = new Pizza(
          data.id,
          data.name,
          data.description,
          data.ingredients.map((ingredient: any) => new Ingredient(
            ingredient.id,
            ingredient.name,
            parseFloat(ingredient.price),
            ingredient.unit,
            ingredient.icon
          )),
          data.image
        )
        this.ingredientService.getIngredients().subscribe(data => {
          this.ingredients = data.map((ingredient: any) => new Ingredient(
            ingredient.id,
            ingredient.name,
            parseFloat(ingredient.price),
            ingredient.unit,
            ingredient.icon
          ))
          this.setIngredientsToAdd(this.ingredients, this.item.ingredients)
        })
      })
    })
  }

  setIngredientsToAdd(ingredients: Ingredient[], skip: Ingredient[] = []) {
    this.ingredientsToAdd = [this.nullIngredient, ...ingredients.filter(i => !skip.map(s => s.id).includes(i.id))]
  }

  save() {
    this.pizzaService.updatePizza(this.item).subscribe(data => {
      this.router.navigate(['/pages/pizza/show', data.id])
    })
  }

  addIngredient(ingredient: Ingredient) {
    this.item.ingredients?.push(ingredient)
    this.selectedIngredient = this.nullIngredient
    this.setIngredientsToAdd(this.ingredients, this.item.ingredients)
  }

  removeIngredient(ingredient: Ingredient) {
    this.item.ingredients = this.item.ingredients?.filter(i => i.id !== ingredient.id) ?? []
    this.setIngredientsToAdd(this.ingredients, this.item.ingredients)
  }

  selectIngredient($event: Event) {
    this.selectedIngredient = this.ingredients.find(i => i.id === parseInt(($event.target as HTMLSelectElement).value))
  }
}
