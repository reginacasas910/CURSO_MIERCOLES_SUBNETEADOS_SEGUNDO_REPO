import { Routes } from '@angular/router';
import { ReginaIndex } from './components/regina-index/regina-index';

export const routes: Routes = [
  { path: 'ReginaIndex', component: ReginaIndex },
  { path: '', redirectTo: 'ReginaIndex', pathMatch: 'full' }
];

