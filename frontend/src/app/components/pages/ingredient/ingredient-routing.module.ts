import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IngredientIndexComponent} from "./ingredient-index/ingredient-index.component";
import {IngredientShowComponent} from "./ingredient-show/ingredient-show.component";
import {IngredientEditComponent} from "./ingredient-edit/ingredient-edit.component";

const routes: Routes = [
  { path: 'index', component: IngredientIndexComponent },
  { path: 'show/:id', component: IngredientShowComponent },
  { path: 'edit/:id', component: IngredientEditComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientRoutingModule { }
