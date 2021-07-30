import {Routes} from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(module => module.HomeModule) }
];
