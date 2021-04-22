import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowactivityPageRoutingModule } from './showactivity-routing.module';

import { ShowactivityPage } from './showactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowactivityPageRoutingModule
  ],
  declarations: [ShowactivityPage]
})
export class ShowactivityPageModule {}
