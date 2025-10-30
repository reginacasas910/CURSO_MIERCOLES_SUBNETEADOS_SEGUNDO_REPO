import { Routes } from '@angular/router';
import { ReginaIndex } from './components/regina-index/regina-index';
import { Eduardo } from './components/eduardo/eduardo';
import { Daniel } from './components/daniel/daniel';

export const routes: Routes = [
  { path: 'ReginaIndex', component: ReginaIndex },
  {path: 'Eduardo', component: Eduardo},
  {path: 'Daniel', component: Daniel},
  { path: '', redirectTo: 'ReginaIndex', pathMatch: 'full' }
];

