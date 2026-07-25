import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: true,
  template: `
    <section class="container py-5">
      <h1 class="display-6 fw-bold mb-3">About Us</h1>
      <p class="lead text-secondary">We build practical programs that help people move forward after incarceration.</p>
    </section>
  `,
})
export class AboutUs {}
