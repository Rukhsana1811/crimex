import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  userEmail: string = 'info@crimex.social';

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

  openMap(): void {
    const mapUrl = 'https://maps.app.goo.gl/FeJXNsfPohmBqC7q9';
    window.open(mapUrl, '_blank');
  }

  openWhatsapp() {
    const url = 'https://wa.me/message/DM7WN3JLOCYWB1';
    window.open(url, '_blank');
  }

  openEmail(): void {
    const mailtoUrl = `mailto:${this.userEmail}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(this.userEmail)}`;

    const fallbackWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    if (!fallbackWindow) {
      window.location.href = mailtoUrl;
      return;
    }

    setTimeout(() => {
      if (fallbackWindow.closed) {
        window.location.href = mailtoUrl;
      }
    }, 1500);
  }
}
