import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListItemComponent } from './pizza-list-item.component';

describe('PizzaListItemComponent', () => {
  let component: PizzaListItemComponent;
  let fixture: ComponentFixture<PizzaListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaListItemComponent]
    });
    fixture = TestBed.createComponent(PizzaListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
