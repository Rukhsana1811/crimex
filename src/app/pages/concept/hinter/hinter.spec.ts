import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hinter } from './hinter';

describe('Hinter', () => {
  let component: Hinter;
  let fixture: ComponentFixture<Hinter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hinter],
    }).compileComponents();

    fixture = TestBed.createComponent(Hinter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
