import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  template: `
    <section class="container py-5">
      <h1 class="display-6 fw-bold mb-3">Feedback</h1>
      <p class="lead text-secondary">We value your feedback and use it to improve the experience.</p>
    </section>
  `,
})
export class Feedback {}
