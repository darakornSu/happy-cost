import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditbillPage } from './editbill.page';

const routes: Routes = [
  {
    path: '',
    component: EditbillPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditbillPageRoutingModule {}
