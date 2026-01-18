import { Routes } from '@angular/router';

import { HomePage } from './home-page/home-page';
import { TaxesOverview } from './taxes/taxes-overview/taxes-overview';
import { TaxesWizard } from './taxes/taxes-wizard/taxes-wizard';
import { SinOverview } from './sin/sin-overview/sin-overview';
import { SinWizard } from './sin/sin-wizard/sin-wizard';
import { GLicense } from './driverLicense/g1-overview/g-license/g-license';
import { G1Wizard } from './driverLicense/g-license-wizard/g-license-wizard';


export const routes: Routes = [
  // Home
  {
    path: '',
    component: HomePage,
    data: { anim: 'home' },
  },

  // ===== SIN =====
  {
    path: 'sin',
    component: SinOverview,
    data: { anim: 'sin' },
  },
  {
    path: 'sin/steps',
    component: SinWizard,
    data: { anim: 'sin-steps' },
  },

  // ===== Taxes =====
  {
    path: 'taxes',
    component: TaxesOverview,
    data: { anim: 'taxes' },
  },
  {
    path: 'taxes/steps',
    component: TaxesWizard,
    data: { anim: 'taxes-steps' },
  },

  // ===== Driver’s license =====
  {
    path: 'g-license',
    component: GLicense,
    data: { anim: 'g-license' },
  },
  {
    path: 'g-license/steps',
    component: G1Wizard,
    data: { anim: 'g-license-steps' },
  },

  // fallback
  {
    path: '**',
    redirectTo: '',
  },
];
