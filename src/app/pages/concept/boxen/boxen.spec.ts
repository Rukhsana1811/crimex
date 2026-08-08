import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Boxen } from './boxen';

describe('Boxen', () => {
  let component: Boxen;
  let fixture: ComponentFixture<Boxen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Boxen],
    }).compileComponents();

    fixture = TestBed.createComponent(Boxen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
