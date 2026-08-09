import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spurwechsel } from './spurwechsel';

describe('Spurwechsel', () => {
  let component: Spurwechsel;
  let fixture: ComponentFixture<Spurwechsel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Spurwechsel],
    }).compileComponents();

    fixture = TestBed.createComponent(Spurwechsel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
