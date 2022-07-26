import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

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

  {
    path: 'hello',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:5000/remoteEntry.js',
      remoteName: 'hello',
      exposedModule: './web-components',
      elementName: 'hello-app'
    } as WebComponentWrapperOptions
  },

  {
    path: '**',
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];
