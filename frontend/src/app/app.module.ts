import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PizzaIndexComponent } from './components/pages/pizza/pizza-index/pizza-index.component';
import { PizzaShowComponent } from './components/pages/pizza/pizza-show/pizza-show.component';
import { PizzaEditComponent } from './components/pages/pizza/pizza-edit/pizza-edit.component';
import { IngredientIndexComponent } from './components/pages/ingredient/ingredient-index/ingredient-index.component';
import { IngredientShowComponent } from './components/pages/ingredient/ingredient-show/ingredient-show.component';
import { IngredientEditComponent } from './components/pages/ingredient/ingredient-edit/ingredient-edit.component';
import {PizzaModule} from "./components/pages/pizza/pizza.module";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PizzaIndexComponent,
    PizzaShowComponent,
    PizzaEditComponent,
    IngredientIndexComponent,
    IngredientShowComponent,
    IngredientEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PizzaModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
