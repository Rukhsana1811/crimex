import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-deeskalation',
  imports: [],
  templateUrl: './deeskalation.html',
  styleUrl: './deeskalation.css',
})
export class Deeskalation implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;


  ngAfterViewInit(): void {
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

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
