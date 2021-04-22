import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowrevenuePageRoutingModule } from './showrevenue-routing.module';

import { ShowrevenuePage } from './showrevenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowrevenuePageRoutingModule
  ],
  declarations: [ShowrevenuePage]
})
export class ShowrevenuePageModule {}
