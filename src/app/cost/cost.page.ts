import { Component, ErrorHandler, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { Router } from '@angular/router';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";

@Component({
  selector: 'app-cost',
  templateUrl: './cost.page.html',
  styleUrls: ['./cost.page.scss'],
  providers: [NavParams],
})
export class CostPage implements OnInit {

  
  dataitem: any =[];
  dataexpend: any = [];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 
      this.loaddatarevenue();
      this.loaddataexpend();
    }
  
    loaddatarevenue(){
      let url = "http://localhost/appdata/loaddatarevenue.php";
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

    loaddataexpend(){
      let url = "http://localhost/appdata/loaddataexpend.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataexpend = data;
          console.log("done.",data);
        }
      },error=>{
        console.log("load fial.")
    
      });
    }
     deletedatarevenue(id:number){

      let url = 'http://localhost/appdata/deleterevenue.php'
      let postdata = new FormData();
      postdata.append('revenue_id',id.toString());
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
          this.loaddatarevenue();}
      },error=>{
      }); this.loaddatarevenue(); }

      deleteexpend(id:number){

        let url = 'http://localhost/appdata/deleteexpend.php'
        let postdata2 = new FormData();
        postdata2.append('expend_id',id.toString());
        this.http.post(url,postdata2).subscribe(data => {
          if(data != null){
            this.loaddataexpend();}
        },error=>{
        }); this.loaddataexpend(); }
  

    btdeleterevenue(id:number){
      const alert = document.createElement('ion-alert');
      alert.message = 'คุณต้องการลบรายการนี้ หรือไม่?';
      alert.buttons = [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            this.deletedatarevenue(id)  
          }
        } 
      ];
        document.body.appendChild(alert);
        return alert.present();
      }
      btdeleteexpend(id:number){
        const alert = document.createElement('ion-alert');
        alert.message = 'คุณต้องการลบรายการนี้ หรือไม่?';
        alert.buttons = [
          {
            text: 'ยกเลิก',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'ใช่',
            handler: () => {
              this.deleteexpend(id)  
            }
          } 
        ];
          document.body.appendChild(alert);
          return alert.present();
        }
      
        revenueshow(id:number, sum_revenue:number, category:string, date:string, note:string){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              revenue_id: id ,
              sum_revenue: sum_revenue,
              category: category,
              date: date,
              note: note
            }
          }
          this.router.navigate(['showrevenue'], navigationExtras);
          
        }
        expendshow(id:number, sum_expend:number, category:string, date:string, note:string){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              expend_id: id ,
              sum_expend: sum_expend,
              category: category,
              date: date,
              note: note
            }
          }
          this.router.navigate(['showexpend'], navigationExtras);
          
        }
    

  ngOnInit() {
  }

}
