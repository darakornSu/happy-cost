import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { Observable } from 'rxjs';


@Component({
  selector: 'app-savings',
  templateUrl: './savings.page.html',
  styleUrls: ['./savings.page.scss'],
  providers: [NavParams],
})
export class SavingsPage implements OnInit {
  datacost: any =[];
  postdata: any =[];
  sent:string = 'sent';
  

  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient) { 
      
      this.load_totalcost();
    }

  load_totalcost(){
    let url2 = "http://localhost/appdata/load_totalcost.php";
    this.http.get(url2)
    .subscribe(data=> {
      if(data != null){
        this.datacost = data;
        
      }else{
        this.load_totalcost();
      };
    },error=>{
      console.log("load fialS.")
  
    });
  }

  save(){
    let url = 'http://localhost/appdata/insertsavings.php'

    let postdataset = new FormData();
    postdataset.append('total_savings',this.postdata.total_savings);

    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
      }else{
        this.load_totalcost();
      }
    });
    const alert = document.createElement('ion-alert');
    alert.message = 'การบันทึกเงินออมเสร็จสมบูรณ์';
    alert.buttons = ['ตกลง'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

  btdeletesavings(){
    const alert = document.createElement('ion-alert');
    alert.message = 'คุณต้องการล้างเงินอ้อม หรือไม่?';
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
          this.deletedatasavings()  
        }
      } 
    ];
      document.body.appendChild(alert);
      return alert.present();
    }

  deletedatasavings(){
    let url = 'http://localhost/appdata/deletesavings.php'
    let postdata = new FormData();
    postdata.append('total_savings','sent'.toString());
    this.http.post(url,postdata).subscribe(data => {
      if(data != null){}
    },error=>{
    });
    this.load_totalcost();
   }
  ngOnInit() {
  }

}
