import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="container py-5">
      <h1 class="display-6 fw-bold mb-3">Contact</h1>
      <p class="lead text-secondary">Reach out for partnerships, questions, or support.</p>
    </section>
  `,
})
export class Contact {}
