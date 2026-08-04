import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hadi } from './hadi';

describe('Hadi', () => {
  let component: Hadi;
  let fixture: ComponentFixture<Hadi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hadi],
    }).compileComponents();

    fixture = TestBed.createComponent(Hadi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
