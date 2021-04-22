import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumBillPageRoutingModule } from './sum-bill-routing.module';

import { SumBillPage } from './sum-bill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumBillPageRoutingModule
  ],
  declarations: [SumBillPage]
})
export class SumBillPageModule {}
