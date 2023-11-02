import {Component, Input} from '@angular/core';
import {Pizza} from "../../../../../core/models/pizza";

@Component({
  selector: 'app-pizza-list-item',
  templateUrl: './pizza-list-item.component.html',
  styleUrls: ['./pizza-list-item.component.sass']
})
export class PizzaListItemComponent {

  @Input() item: Pizza | undefined
  showModal: boolean = false;

}
