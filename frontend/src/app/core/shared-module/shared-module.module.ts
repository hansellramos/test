import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PizzaService} from "../services/pizza.service";
import {IngredientService} from "../services/ingredient.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    PizzaService,
    IngredientService
  ]
})
export class SharedModuleModule { }
