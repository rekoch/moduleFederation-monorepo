import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {loadRemoteModule} from "@angular-architects/module-federation";

export const APP_ROUTES: Routes = [
  {path: 'microOne', loadChildren: () => loadRemoteModule({
      remoteName: 'microOne',
      exposedModule: './Module'
    }).then(module => module.HomeModule)
  },
  {path: 'microTwo', loadChildren: () => loadRemoteModule({
      remoteName: 'microTwo',
      exposedModule: './Module'
    }).then(module => module.HomeModule)
  },
  {path: '**', component: HomeComponent},
];
