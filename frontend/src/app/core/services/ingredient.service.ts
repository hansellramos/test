import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Ingredient} from "../models/ingredient";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor() { }

  getIngredients(): Observable<Ingredient[]> {
    return of([
      {id: 1, name: 'Mozzarella', price: 1.5, unit: 'g', icon: 'cheese.svg'},
      {id: 2, name: 'Tomate', price: 1.5, unit: 'g', icon: 'tomato.svg'},
      {id: 3, name: 'bacon', price: 1.5, unit: 'g', icon: 'bacon.svg'},
      {id: 4, name: 'Onion', price: 1.5, unit: 'g', icon: 'onion.svg'},
      {id: 5, name: 'Sausage', price: 1.5, unit: 'g', icon: 'saussage.svg'},
      {id: 6, name: 'Oregano', price: 1.5, unit: 'g', icon: 'herb.svg'},
    ])
  }

  getIngredient(id: number): Observable<Ingredient> {
    return of({id: 1, name: 'Mozzarella', price: 1.5, unit: 'g', icon: 'cheese.svg'})
  }

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return of(ingredient)
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return of(ingredient)
  }

  deleteIngredient(id: number): Observable<number> {
    return of(id)
  }
}
