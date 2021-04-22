import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
  providers: [NavParams],
})
export class TestPage implements OnInit {
 dataitem: any = {};
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) { 
      this.loaddata();
    }

    ionViewDidLoad(){
      console.log('ionViewDidLoad ListviewPage');
    }
    loaddata(){
      let url = "http://localhost/appdata/loaddata.php";
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
