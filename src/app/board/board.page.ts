import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";


@Component({
  selector: 'app-board',
  templateUrl: './board.page.html',
  styleUrls: ['./board.page.scss'],
})
export class BoardPage implements OnInit {
  dataitemactivity: any = [];
  dataitem: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 
      this.loaddataboard();
      this.loaddataboardactivity();
    }

    loaddataboard(){
      let url = "http://localhost/appdata/loadboard.php";
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
    loaddataboardactivity(){
      let url = "http://localhost/appdata/loadboardactivity.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataitemactivity = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    billshow(id:number, sum_bill:number, category:string, date:string, note:string, status:string){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          bill_id: id ,
          sum_bill: sum_bill,
          category: category,
          date: date,
          note: note,
          status: status
        }
      }
      this.router.navigate(['showbill'], navigationExtras);
      
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
