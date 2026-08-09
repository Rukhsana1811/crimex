import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deeskalation } from './deeskalation';

describe('Deeskalation', () => {
  let component: Deeskalation;
  let fixture: ComponentFixture<Deeskalation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Deeskalation],
    }).compileComponents();

    fixture = TestBed.createComponent(Deeskalation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
