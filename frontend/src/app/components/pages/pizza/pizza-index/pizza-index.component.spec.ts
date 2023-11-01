import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaIndexComponent } from './pizza-index.component';

describe('PizzaIndexComponent', () => {
  let component: PizzaIndexComponent;
  let fixture: ComponentFixture<PizzaIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaIndexComponent]
    });
    fixture = TestBed.createComponent(PizzaIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
