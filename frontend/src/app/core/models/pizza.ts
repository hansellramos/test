import {Ingredient} from "./ingredient";

export class Pizza {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[] = [];
  image: string;

  price(): number {
    return this.ingredients.reduce((acc, ingredient) => acc + ingredient.price, 0) * 1.5;
  }

  constructor(id: number, name: string, description: string, ingredients: Ingredient[], image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.image = image;
  }
}
