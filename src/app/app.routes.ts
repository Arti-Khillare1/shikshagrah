import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page.component';
import { PageNotFoundComponent } from './page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' }, 
  {
    path: 'shikshagraha/:action/:id',
    component: LandingPageComponent,
  },
  { path: '**', component: PageNotFoundComponent },                 
];