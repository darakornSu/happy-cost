import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers: [NavParams],
})
export class HomePage implements OnInit {
  datacost: any =[];
  dataitem: any = [];
  dataitemrevenue: any = [];
  dataitem2: any = [];
  databoard: any = [];
  datasum_expend:any = [];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public route: ActivatedRoute,
    public router: Router,
    public http: HttpClient) { 
      this.loaddataexpend();
      this.load_totalcost();
      this.loadboard();
      this.loaddataboard();
      this.loaddatarevenue();
      this.loaddatasum();
    }
  
    loaddatasum(){
      let url = "http://localhost/appdata/loaddatasum_expendtoday.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.datasum_expend = data;
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    loaddataexpend(){
      let url = "http://localhost/appdata/loadhomeexpend.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataitem = data;
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    loaddatarevenue(){
      let url = "http://localhost/appdata/loadhomerevenue.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataitemrevenue = data;
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    load_totalcost(){
      let url2 = "http://localhost/appdata/load_totalcost.php";
      this.http.get(url2)
      .subscribe(data=> {
        if(data != null){
          this.datacost = data;
        }
      },error=>{
        console.log("load fialS.")
    
      });
    }

    loadboard(){
      let url = "http://localhost/appdata/loadmessage.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.databoard = data;
        }
      },error=>{
      });
    }
    loaddataboard(){
      let url = "http://localhost/appdata/loadboard.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataitem2 = data;
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
  gotoExpend(){
    this.router.navigate(['expend']);
  }
  gotoRevenue(){
    this.router.navigate(['revenue']);
  }
  ngOnInit() {
  }

}
