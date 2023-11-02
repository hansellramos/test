import { Component } from '@angular/core';
import {Ingredient} from "../../../../core/models/ingredient";
import {ActivatedRoute, Router} from "@angular/router";
import {IngredientService} from "../../../../core/services/ingredient.service";

@Component({
  selector: 'app-ingredient-edit',
  templateUrl: './ingredient-edit.component.html',
  styleUrls: ['./ingredient-edit.component.sass']
})
export class IngredientEditComponent {

  item: Ingredient

  constructor(private ingredientService: IngredientService,
              private route: ActivatedRoute,
              private router: Router) {
    this.item = {} as unknown as Ingredient
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ingredientService.getIngredient(params['id']).subscribe(data => {
        this.item = new Ingredient(data.id, data.name, data.price, data.unit, data.icon)
      })
    })
  }

  save() {
    this.ingredientService.updateIngredient(this.item).subscribe(data => {
      this.router.navigate(['/pages/ingredient/show', data.id])
    })
  }

}
