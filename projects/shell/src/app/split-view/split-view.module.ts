import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SplitViewComponent} from './split-view.component';
import {SPLIT_ROUTES} from "./split.routes";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    SplitViewComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SPLIT_ROUTES)
  ]
})
export class SplitViewModule {
}
