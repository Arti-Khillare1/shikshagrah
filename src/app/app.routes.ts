import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/404', pathMatch: 'full' }, 
  {
    path: ':action/:id',
    component: LandingPageComponent,
  },
  { path: '**', component: PageNotFoundComponent },                 
];