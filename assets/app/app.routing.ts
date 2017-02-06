import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent}  		from './website';
const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
