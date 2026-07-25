import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  template: `
    <section class="container py-5">
      <h1 class="display-6 fw-bold mb-3">Imprint</h1>
      <p class="lead text-secondary">Legal and publisher information can be placed here.</p>
    </section>
  `,
})
export class Imprint {}
