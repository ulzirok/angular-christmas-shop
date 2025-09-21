import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySwitcher } from './category-switcher';

describe('CategorySwitcher', () => {
  let component: CategorySwitcher;
  let fixture: ComponentFixture<CategorySwitcher>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySwitcher],
    }).compileComponents();

    fixture = TestBed.createComponent(CategorySwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
