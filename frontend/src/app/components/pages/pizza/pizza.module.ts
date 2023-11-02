import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PizzaRoutingModule } from './pizza-routing.module';
import { PizzaListItemComponent } from './components/pizza-list-item/pizza-list-item.component';
import { PizzaIngredientsModalComponent } from './components/pizza-ingredients-modal/pizza-ingredients-modal.component';


@NgModule({
  declarations: [
    PizzaListItemComponent,
    PizzaIngredientsModalComponent
  ],
  exports: [
    PizzaListItemComponent
  ],
  imports: [
    CommonModule,
    PizzaRoutingModule
  ]
})
export class PizzaModule { }
