import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowbehaviorPageRoutingModule } from './showbehavior-routing.module';

import { ShowbehaviorPage } from './showbehavior.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowbehaviorPageRoutingModule
  ],
  declarations: [ShowbehaviorPage]
})
export class ShowbehaviorPageModule {}
