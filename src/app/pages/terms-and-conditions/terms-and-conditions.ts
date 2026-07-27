import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-terms-and-conditions',
  imports: [],
  templateUrl: './terms-and-conditions.html',
  styleUrl: './terms-and-conditions.css',
})
export class TermsAndConditions implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    this.setupRevealAnimation();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupRevealAnimation(): void {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => this.observer?.observe(element));
  }
}
