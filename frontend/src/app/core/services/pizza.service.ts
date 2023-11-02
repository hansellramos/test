import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Pizza} from "../models/pizza";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor() { }

  getPizzas(): Observable<Pizza[]> {
    return of<Pizza[]>([
      {id: 1, name: 'Fun Pizza', image: 'pizza-fun.jpg', ingredients: [
        {id: 1, name: 'Tomato', image: 'tomato.svg'},
        {id: 2, name: 'Mozzarella', image: 'mozzarella.svg'},
        ], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tempus ipsum, a elementum ligula. Etiam aliquet mollis ipsum id faucibus. Curabitur id felis non orci blandit auctor ut nec metus. Vestibulum aliquam scelerisque orci in laoreet. Donec vitae ornare lectus, at iaculis justo. Pellentesque tincidunt eu turpis at dignissim.'} as unknown as Pizza,
      {id: 2, name: 'Super Mushroom Pizza', image: 'pizza-mushrooms.jpg', ingredients: [], description: 'Maecenas lacinia efficitur eros a vehicula. Nam placerat blandit pulvinar. Praesent ullamcorper elit et enim feugiat, in tempus urna cursus. Etiam et arcu vitae sem tempus fringilla. Mauris at lorem nisl. Nam euismod augue id ligula malesuada viverra. Mauris pulvinar diam nec auctor accumsan.'} as unknown as Pizza,
    ])

  }
  getPizza(id: number): Observable<Pizza> {
    return of<Pizza>({id: 1, name: 'Fun Pizza', image: 'pizza-fun.jpg', ingredients: [{id: 2, name: 'Mozzarella', image: 'mozzarella.svg'}], description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tempus ipsum, a elementum ligula. Etiam aliquet mollis ipsum id faucibus. Curabitur id felis non orci blandit auctor ut nec metus. Vestibulum aliquam scelerisque orci in laoreet. Donec vitae ornare lectus, at iaculis justo. Pellentesque tincidunt eu turpis at dignissim.'} as unknown as Pizza)
  }

  createPizza(pizza: Pizza): Observable<Pizza> {
    return of(pizza)
  }

  updatePizza(pizza: Pizza): Observable<Pizza> {
    return of(pizza)
  }

  deletePizza(id: number): Observable<number> {
    return of(id)
  }
}
