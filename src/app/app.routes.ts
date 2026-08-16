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
import { Ben } from './pages/about-us/ben/ben';
import { Hadi } from './pages/about-us/hadi/hadi';
import { Ast } from './pages/concept/ast/ast';
import { Boxen } from './pages/concept/boxen/boxen';
import { Hinter } from './pages/concept/hinter/hinter';
import { Stark } from './pages/concept/stark/stark';
import { Deeskalation } from './pages/concept/deeskalation/deeskalation';
import { Spurwechsel } from './pages/concept/spurwechsel/spurwechsel';
import { Interessantes } from './pages/interessantes/interessantes';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'about-us/ben', component: Ben },
  { path: 'about-us/hadi', component: Hadi },
  { path: 'supporter', component: Supporter },
  { path: 'contact', component: Contact },
  { path: 'concept', component: Concept },
  { path: 'concept/ast', component: Ast },
  { path: 'concept/boxen', component: Boxen},
  { path: 'concept/hinter', component: Hinter },
  { path: 'concept/stark', component: Stark },
  { path: 'concept/deeskalation', component: Deeskalation },
  { path: 'concept/spurwechsel', component: Spurwechsel },
  { path: 'feedback', component: Feedback },
  { path: 'imprint', component: Imprint },
  { path: 'terms', component: TermsAndConditions },
  { path: 'privacy', component: PrivacyPolicy },
  { path: 'interessantes', component: Interessantes }
];
