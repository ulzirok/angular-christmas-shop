import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Gifts } from './features/gifts/gifts';

export const routes: Routes = [
  { path: '', component: Home },
  {path: 'gifts', component: Gifts}
];
