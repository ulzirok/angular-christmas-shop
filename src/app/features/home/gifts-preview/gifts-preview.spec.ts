import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftsPreview } from './gifts-preview';

describe('GiftsPreview', () => {
  let component: GiftsPreview;
  let fixture: ComponentFixture<GiftsPreview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftsPreview],
    }).compileComponents();

    fixture = TestBed.createComponent(GiftsPreview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
