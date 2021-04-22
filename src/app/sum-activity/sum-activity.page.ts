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
  selector: 'app-sum-activity',
  templateUrl: './sum-activity.page.html',
  styleUrls: ['./sum-activity.page.scss'],
  providers: [NavParams],
})
export class SumActivityPage implements OnInit {
  dataitem: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 
      this.loaddata();
    }

    loaddata(){
      let url = "http://localhost/appdata/loaddataactivity.php";
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
    activityshow(id:number, cost:number, date:string, note:string, topic:string){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          activity_id: id ,
          cost: cost,
          date: date,
          note: note,
          topic: topic
        }
      }
      this.router.navigate(['showactivity'], navigationExtras);
      
    }
  ngOnInit() {
  }

}
