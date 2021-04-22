import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowactivityPage } from './showactivity.page';

const routes: Routes = [
  {
    path: '',
    component: ShowactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowactivityPageRoutingModule {}
