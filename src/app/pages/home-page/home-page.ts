import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  template: `
    <section class="container py-5">
      <h1 class="display-6 fw-bold mb-3">Home</h1>
      <p class="lead text-secondary">Welcome to the homepage of the Crimexgug experience.</p>
    </section>
  `,
})
export class HomePage {}
