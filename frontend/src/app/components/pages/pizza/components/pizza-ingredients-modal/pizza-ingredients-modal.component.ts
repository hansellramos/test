import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {Pizza} from "../../../../../core/models/pizza";

@Component({
  selector: 'app-pizza-ingredients-modal',
  templateUrl: './pizza-ingredients-modal.component.html',
  styleUrls: ['./pizza-ingredients-modal.component.sass']
})
export class PizzaIngredientsModalComponent {

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.close()
  }

  @Input() item: Pizza | undefined

  @Output() onClose: EventEmitter<void> = new EventEmitter<void>()

  close(): void {
    this.onClose.emit()
  }

}
