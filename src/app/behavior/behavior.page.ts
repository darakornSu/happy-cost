import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";


@Component({
  selector: 'app-behavior',
  templateUrl: './behavior.page.html',
  styleUrls: ['./behavior.page.scss'],
  providers: [NavParams],
})
export class BehaviorPage implements OnInit {
  databehavior: any = []; 
  databehaviorforday: any = []; 
  dataitem: any = [];
  datasum_expend:any =[];
  datasum_revenue:any = [];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) { 
      this.loadscore();
      this.loadbehavior();
      this.loaddatasum();
      this.loaddatasum_revenue();
      this.loaddatabehaviorforday();
    }

    loadscore(){
      let url = 'http://localhost/appdata/insertbehavior.php'
      let item: number = 1;
      let postdata = new FormData();
      postdata.append('item',item.toString());
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
          this.loaddata();   
        }
      },error=>{});  
      this.loaddata();
      }
      
    loaddata(){
      let url = "http://localhost/appdata/loaddatabehavior.php";
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
    loadbehavior(){
      let url = "http://localhost/appdata/loadbehavior.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.databehavior = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    loaddatasum(){
      let url = "http://localhost/appdata/loaddatasum_expend.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.datasum_expend = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    loaddatasum_revenue(){
      let url = "http://localhost/appdata/loaddatasum_revenue.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.datasum_revenue = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
    loaddatabehaviorforday(){
      let url = "http://localhost/appdata/loadbehaviorforday.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.databehaviorforday = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }

  ngOnInit() {
  }

}
