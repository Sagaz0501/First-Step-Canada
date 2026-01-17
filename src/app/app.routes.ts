import { Routes } from '@angular/router';

import { HomePage } from './home-page/home-page';
import { TaxesOverview } from './taxes/taxes-overview/taxes-overview';
import { TaxesWizard } from './taxes/taxes-wizard/taxes-wizard';
import { GLicense } from './g-license/g-license';

export const routes: Routes = [
  { path: '', component: HomePage },

  // Taxes
  { path: 'taxes', component: TaxesOverview },
  { path: 'taxes/steps', component: TaxesWizard },

  // G license
  { path: 'g-license', component: GLicense },

  // fallback
  { path: '**', redirectTo: '' },
];
