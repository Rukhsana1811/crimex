import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statt } from './statt';

describe('Statt', () => {
  let component: Statt;
  let fixture: ComponentFixture<Statt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statt],
    }).compileComponents();

    fixture = TestBed.createComponent(Statt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
