import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interessantes } from './interessantes';

describe('Interessantes', () => {
  let component: Interessantes;
  let fixture: ComponentFixture<Interessantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Interessantes],
    }).compileComponents();

    fixture = TestBed.createComponent(Interessantes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
