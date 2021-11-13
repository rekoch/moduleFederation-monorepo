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
  {path: 'microThree', loadChildren: () => loadRemoteModule({
      remoteName: 'microThree',
      exposedModule: './Module'
    }).then(module => module.HomeModule)
  },
  {path: 'microSplit', loadChildren: () => import("./split-view/split-view.module").then(module => module.SplitViewModule)},
  {path: '**', component: HomeComponent},
];
