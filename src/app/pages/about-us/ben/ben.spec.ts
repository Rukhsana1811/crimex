import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ben } from './ben';

describe('Ben', () => {
  let component: Ben;
  let fixture: ComponentFixture<Ben>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ben],
    }).compileComponents();

    fixture = TestBed.createComponent(Ben);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
