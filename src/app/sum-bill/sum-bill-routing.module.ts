import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SumBillPage } from './sum-bill.page';

const routes: Routes = [
  {
    path: '',
    component: SumBillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SumBillPageRoutingModule {}
