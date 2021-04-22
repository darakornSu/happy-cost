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
  selector: 'app-sum-bill',
  templateUrl: './sum-bill.page.html',
  styleUrls: ['./sum-bill.page.scss'],
  providers: [NavParams],
})
export class SumBillPage implements OnInit {
  params: Object;
  pushPage: any;
  dataitem: any =[];
  bill_id:string;
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 
      this.loaddata();
    }
  
    loaddata(){
      let url = "http://localhost/appdata/loadbill.php";
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

  deletedata(id:number){
    let url = 'http://localhost/appdata/deletebill.php'

    let postdata = new FormData();
    postdata.append('bill_id',id.toString());
    
    this.http.post(url,postdata).subscribe(data => {
      if(data != null){
        
        
      }
      else{
        this.loaddata();
        

      }
    },error=>{

    });
    
  
  }
    btdelete(id:number){
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
          this.deletedata(id);
          
        }
      }
      
    ];
      document.body.appendChild(alert);
      return alert.present();
    
    
    }
    confirmbilldata(id:number){
    let url = 'http://localhost/appdata/confirmbill.php'
    let postdata = new FormData();
    postdata.append('bill_id',id.toString());
    this.http.post(url,postdata).subscribe(data => {
      if(data != null){
        this.loaddata();   
      }
    },error=>{});
    this.loaddata();   
    }
    confirmbill(id:number){
      const alert = document.createElement('ion-alert');
      alert.message = 'คุณต้องการยืนยันการชำระบิล หรือไม่?';
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
            this.confirmbilldata(id);
            
          }
        }
        
      ];
        document.body.appendChild(alert);
        return alert.present();

    
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
     gotobill(){
      this.navCtrl.navigateRoot('/bill');
  
    }
  ngOnInit() {
    
  }

}
