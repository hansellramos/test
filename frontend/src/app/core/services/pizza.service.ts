import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Pizza} from "../models/pizza";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    private http: HttpClient
  ) { }

  getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(`${environment.api}/pizza`)
  }
  getPizza(id: number): Observable<Pizza> {
    return this.http.get<Pizza>(`${environment.api}/pizza/${id}`)
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return this.http.post<Pizza>(`${environment.api}/pizzas`, pizza)
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return this.http.put<Pizza>(`${environment.api}/pizza/${pizza.id}`, pizza)
  }

  deletePizza(id: number): Observable<number> {
    return this.http.delete<number>(`${environment.api}/pizza/${id}`)
  }
}
