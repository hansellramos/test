import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientIndexComponent } from './ingredient-index.component';

describe('IngredientIndexComponent', () => {
  let component: IngredientIndexComponent;
  let fixture: ComponentFixture<IngredientIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientIndexComponent]
    });
    fixture = TestBed.createComponent(IngredientIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
