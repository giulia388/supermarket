import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'prenotazione',
    loadComponent: () =>
      import('./pages/prenotazione/prenotazione.page').then(m => m.PrenotazionePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
