import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowexpendPageRoutingModule } from './showexpend-routing.module';

import { ShowexpendPage } from './showexpend.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowexpendPageRoutingModule
  ],
  declarations: [ShowexpendPage]
})
export class ShowexpendPageModule {}
