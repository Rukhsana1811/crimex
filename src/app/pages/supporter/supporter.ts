import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-supporter',
  standalone: true,
  templateUrl: './supporter.html',
  styleUrls: ['./supporter.css'],
})
export class Supporter  implements AfterViewInit, OnDestroy  {
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

