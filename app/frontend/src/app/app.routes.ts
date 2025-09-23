import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then(m => m.HomePage) // 👈 usa solo pages/home
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'prenotazione',
    loadComponent: () => import('./pages/prenotazione/prenotazione.page').then( m => m.PrenotazionePage)
  }

];
