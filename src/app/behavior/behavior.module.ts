import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BehaviorPageRoutingModule } from './behavior-routing.module';

import { BehaviorPage } from './behavior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BehaviorPageRoutingModule
  ],
  declarations: [BehaviorPage]
})
export class BehaviorPageModule {}
