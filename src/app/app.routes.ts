import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Concept } from './pages/concept/concept';
import { Contact } from './pages/contact/contact';
import { Feedback } from './pages/feedback/feedback';
import { Imprint } from './pages/imprint/imprint';
import { Supporter } from './pages/supporter/supporter';
import { TermsAndConditions } from './pages/terms-and-conditions/terms-and-conditions';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'supporter', component: Supporter },
  { path: 'contact', component: Contact },
  { path: 'concept', component: Concept },
  { path: 'feedback', component: Feedback },
  { path: 'imprint', component: Imprint },
  { path: 'terms', component: TermsAndConditions },
  { path: 'privacy', component: PrivacyPolicy }
];
