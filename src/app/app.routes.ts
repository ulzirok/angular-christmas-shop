import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { Gifts } from './features/gifts/gifts';
import { About } from './features/about/about';
import { Contacts } from './features/contacts/contacts';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'gifts', component: Gifts },
  { path: 'about', component: About },
  { path: 'contacts', component: Contacts },
];
