import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIngredientsModalComponent } from './pizza-ingredients-modal.component';

describe('PizzaIngredientsModalComponent', () => {
  let component: PizzaIngredientsModalComponent;
  let fixture: ComponentFixture<PizzaIngredientsModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaIngredientsModalComponent]
    });
    fixture = TestBed.createComponent(PizzaIngredientsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
