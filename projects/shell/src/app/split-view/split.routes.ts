import {Routes} from "@angular/router";
import {SplitViewComponent} from "./split-view.component";
import {loadRemoteModule} from "@angular-architects/module-federation";

export const SPLIT_ROUTES: Routes = [
  {path: "", component: SplitViewComponent, children: [
      {
        path: 'microOne', outlet: 'left', loadChildren: () => loadRemoteModule({
          remoteName: 'microOne',
          exposedModule: './Module'
        }).then(module => module.HomeModule)
      },
      {
        path: 'microTwo', outlet: 'right', loadChildren: () => loadRemoteModule({
          remoteName: 'microTwo',
          exposedModule: './Module'
        }).then(module => module.HomeModule)
      }
    ]},
]
