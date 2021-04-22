import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { ShowbillPage } from '../showbill/showbill.page';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showbehavior',
  templateUrl: './showbehavior.page.html',
  styleUrls: ['./showbehavior.page.scss'],
  providers: [NavParams],
})
export class ShowbehaviorPage implements OnInit {
  dataitem: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 
      this.loaddata();
    }
  
    loaddata(){
      let url = "http://localhost/appdata/loaddatabehaviormonth.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataitem = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  ngOnInit() {
  }

}
