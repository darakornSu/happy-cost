import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowbillPage } from './showbill.page';

const routes: Routes = [
  {
    path: '',
    component: ShowbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowbillPageRoutingModule {}
