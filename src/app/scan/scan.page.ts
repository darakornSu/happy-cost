import { Component, OnInit } from '@angular/core';

import { NavController, ActionSheetController, LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage implements OnInit {
  srcImage: string;
  OCRAD: any;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public loadingCtrl: LoadingController,
  ) {}
    
  ngOnInit() {
  }

}
