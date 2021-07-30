import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const APP_ROUTES: Routes = [
  {path: 'microOne', loadChildren: () => import('microOne/Module').then(m => m.HomeModule)},
  {path: 'microTwo', loadChildren: () => import('microTwo/Module').then(m => m.HomeModule)},
  {path: '**', component: HomeComponent},
];
