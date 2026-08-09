import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stark } from './stark';

describe('Stark', () => {
  let component: Stark;
  let fixture: ComponentFixture<Stark>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stark],
    }).compileComponents();

    fixture = TestBed.createComponent(Stark);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
