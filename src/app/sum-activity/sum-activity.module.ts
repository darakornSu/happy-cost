import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SumActivityPageRoutingModule } from './sum-activity-routing.module';

import { SumActivityPage } from './sum-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SumActivityPageRoutingModule
  ],
  declarations: [SumActivityPage]
})
export class SumActivityPageModule {}
