import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },


  // Your route here:

  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'dashboard',
        exposedModule: './Dashboard'
      })
        .then(m => m.DashboardModule)
  },

  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('dashboard/Module').then(m => m.DashboardModule)
  // },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];
