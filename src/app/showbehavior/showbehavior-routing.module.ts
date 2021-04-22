import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowbehaviorPage } from './showbehavior.page';

const routes: Routes = [
  {
    path: '',
    component: ShowbehaviorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowbehaviorPageRoutingModule {}
