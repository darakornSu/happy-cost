import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumActivityPage } from './sum-activity.page';

const routes: Routes = [
  {
    path: '',
    component: SumActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumActivityPageRoutingModule {}
