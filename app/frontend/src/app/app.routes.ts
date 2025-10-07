import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'prenotazione',
    loadComponent: () =>
      import('./pages/prenotazione/prenotazione.page').then(
        (m) => m.PrenotazionePage
      ),
  },
  {
    path: 'servizi/:serviceId',
    loadComponent: () =>
      import('./pages/service-detail/service-detail.page').then(
        (m) => m.ServiceDetailPage
      ),
  },
 {
    path: 'spa',
    loadComponent: () =>
      import('./pages/spa/spa.page').then((m) => m.SpaPage),
  },
  {
    path: 'unghie',
    loadComponent: () =>
      import('./pages/unghie/unghie.page').then((m) => m.UnghiePage),
  },
  {
    path: 'ceretta',
    loadComponent: () =>
      import('./pages/ceretta/ceretta.page').then((m) => m.CerettaPage),
  }

];
