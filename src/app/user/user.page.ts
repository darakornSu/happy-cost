import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  providers: [NavParams],
})
export class UserPage implements OnInit {
  dataitem: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController) { 
      this.loaddata()
    
    }

  loaddata(){
    let url = "http://localhost/appdata/loaddatamember.php";
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
