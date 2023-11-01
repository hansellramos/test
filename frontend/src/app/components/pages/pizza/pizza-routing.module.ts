import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PizzaIndexComponent} from "./pizza-index/pizza-index.component";
import {PizzaShowComponent} from "./pizza-show/pizza-show.component";
import {PizzaEditComponent} from "./pizza-edit/pizza-edit.component";

const routes: Routes = [
  { path: 'index', component: PizzaIndexComponent },
  { path: 'show/:id', component: PizzaShowComponent },
  { path: 'edit/:id', component: PizzaEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzaRoutingModule { }
