import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Layout } from './layout';

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent default navigation when redirecting to the contact page', () => {
    const event = new MouseEvent('click', { bubbles: true, cancelable: true });
    spyOn(event, 'preventDefault');
    const navigateSpy = spyOn((component as any).router, 'navigate');

    component.redirectToContact(event as any);

    expect(event.preventDefault).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalledWith(['/contact']);
  });
});
