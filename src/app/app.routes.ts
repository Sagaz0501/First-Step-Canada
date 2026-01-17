import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { TaxesOverview } from './taxes/taxes-overview/taxes-overview';
import { TaxesWizard } from './taxes/taxes-wizard/taxes-wizard';
export const routes: Routes = [

      { path: '', component: HomePage },

  // Taxes
  { path: 'taxes', component: TaxesOverview },
  { path: 'taxes/steps', component: TaxesWizard },

  // temporal (para que no rompa)
  { path: '**', redirectTo: '' }
];
