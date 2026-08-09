import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-concept',
  standalone: true,
  templateUrl: './concept.html',
  styleUrls: ['./concept.css'],
})
export class Concept implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(private router: Router) { }

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

  navigateToAST(): void {
    this.router.navigate(['/concept/ast']);
  }

  navigateToBoxen(): void {
    this.router.navigate(['/concept/boxen']);
  }

  navigateToHinter(): void {
    this.router.navigate(['/concept/hinter']);
  }

  navigateToStark(): void {
    this.router.navigate(['/concept/stark']);
  }

  navigateToDeeskalation(): void {
    this.router.navigate(['/concept/deeskalation']);
  }

  navigateToSpurwechsel(): void {
    this.router.navigate(['/concept/spurwechsel']);
  }
}
