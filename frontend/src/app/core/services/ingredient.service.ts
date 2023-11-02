import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Ingredient} from "../models/ingredient";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: HttpClient
  ) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(`${environment.api}/ingredient`)
  }

  getIngredient(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(`${environment.api}/ingredient/${id}`)
  }

  createIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(`${environment.api}/ingredient`, ingredient)
  }

  updateIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.put<Ingredient>(`${environment.api}/ingredient/${ingredient.id}`, ingredient)
  }

  deleteIngredient(id: number): Observable<number> {
    return this.http.delete<number>(`${environment.api}/ingredient/${id}`)
  }
}
