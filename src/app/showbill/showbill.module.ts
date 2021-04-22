import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowbillPageRoutingModule } from './showbill-routing.module';

import { ShowbillPage } from './showbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowbillPageRoutingModule
  ],
  declarations: [ShowbillPage]
})
export class ShowbillPageModule {}
