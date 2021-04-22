import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpendPage } from './expend.page';

const routes: Routes = [
  {
    path: '',
    component: ExpendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpendPageRoutingModule {}
