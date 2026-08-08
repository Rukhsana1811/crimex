import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ast } from './ast';

describe('Ast', () => {
  let component: Ast;
  let fixture: ComponentFixture<Ast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ast],
    }).compileComponents();

    fixture = TestBed.createComponent(Ast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
