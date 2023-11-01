import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaShowComponent } from './pizza-show.component';

describe('PizzaShowComponent', () => {
  let component: PizzaShowComponent;
  let fixture: ComponentFixture<PizzaShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaShowComponent]
    });
    fixture = TestBed.createComponent(PizzaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
