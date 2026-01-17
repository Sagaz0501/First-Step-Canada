import { Routes } from '@angular/router';
import { Sin } from './sin/sin';

export const routes: Routes = [
  { path: '', redirectTo: '/sin', pathMatch: 'full' },
  { path: 'sin', component: Sin }
];