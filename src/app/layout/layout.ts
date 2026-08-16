import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, CommonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit, OnDestroy {
  isScrolled = false;
  isMenuOpen = false;
  private scrollListener?: () => void;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.scrollListener = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener);

    // Scroll to top on route change
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.scrollToTop();
      });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener('scroll', this.scrollListener);
    }
  }

  onScroll(): void {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  redirectToContact() {
    this.router.navigate(['/contact']);
  }
  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();

    // Scroll to top first
    this.scrollToTop();

    // Then scroll to section after a small delay
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  scrollToElement(element: HTMLElement): void {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // Handle footer link clicks
  onFooterLinkClick(route: string, sectionId?: string): void {
    this.closeMenu();
    this.scrollToTop();

    if (route) {
      this.router.navigate([route]).then(() => {
        if (sectionId) {
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 300);
        }
      });
    }
  }

  openWhatsapp() {
    const url = 'https://wa.me/message/DM7WN3JLOCYWB1';
    window.open(url, '_blank');
  }
  
}
