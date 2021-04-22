import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpendPageRoutingModule } from './expend-routing.module';

import { ExpendPage } from './expend.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpendPageRoutingModule
  ],
  declarations: [ExpendPage]
})
export class ExpendPageModule {}
