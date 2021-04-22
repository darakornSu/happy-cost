import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowrevenuePage } from './showrevenue.page';

const routes: Routes = [
  {
    path: '',
    component: ShowrevenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowrevenuePageRoutingModule {}
