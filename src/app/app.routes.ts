import { Routes } from '@angular/router';

import { HomePage } from './home-page/home-page';
import { TaxesOverview } from './taxes/taxes-overview/taxes-overview';
import { TaxesWizard } from './taxes/taxes-wizard/taxes-wizard';
import { SinOverview } from './sin/sin-overview/sin-overview';
import { SinWizard } from './sin/sin-wizard/sin-wizard';
import { GLicense } from './driverLicense/g1-overview/g-license/g-license';
import { G1Wizard } from './driverLicense/g-license-wizard/g-license-wizard';


export const routes: Routes = [
  { path: '', component: HomePage },

  // SIN
  { path: 'sin', component: SinOverview },
  { path: 'sin/steps', component: SinWizard },

  // Taxes
  { path: 'taxes', component: TaxesOverview },  
  { path: 'taxes/steps', component: TaxesWizard },

  // G license
  { path: 'g-license', component: GLicense },
  { path: 'g1/steps', component: G1Wizard },

  // fallback
  { path: '**', redirectTo: '' },
];
