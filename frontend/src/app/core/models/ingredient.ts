export class Ingredient {
  id: number;
  name: string;
  price: number;
  unit: string;
  icon: string;

  constructor(id: number, name: string, price: number, unit: string, icon: string) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.unit = unit;
    this.icon = icon;
  }

}
