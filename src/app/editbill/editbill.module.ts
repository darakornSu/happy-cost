import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditbillPageRoutingModule } from './editbill-routing.module';

import { EditbillPage } from './editbill.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditbillPageRoutingModule
  ],
  declarations: [EditbillPage]
})
export class EditbillPageModule {}
