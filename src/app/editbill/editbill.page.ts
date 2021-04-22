import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { ActivatedRoute,Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-editbill',
  templateUrl: './editbill.page.html',
  styleUrls: ['./editbill.page.scss'],
})
export class EditbillPage implements OnInit {

  dataitem: any =[];
  dataitemshowbill: any =[];
  postdata: any ={};
  sum_bill:number;
  category:string;
  date: string;
  note: string;
  status:string;
  color:string;
  bill_id:number;
  showitem: boolean;
  datashow: any = [];
  constructor(public navCtrl: NavController,
    public navparm: NavParams,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router,
    public alertController: AlertController) { 
      this.postdata.sum_bill = "";
      this.postdata.category= "";
      this.postdata.date= "";
      this.route.queryParams.subscribe(params =>{
        console.log('params: ',params);
        if (params && params.bill_id){
          this.bill_id = params.bill_id;
          this.sum_bill = params.sum_bill;
          this.category = params.category;
          this.date = params.date;
          this.note = params.note;
          this.status = params.status;
          this.datashow = [{bill_id:this.bill_id, sum_bill:this.sum_bill ,category:this.category , date:this.date, note:this.note , status:this.status}];
        } console.log('datashow: ',this.datashow);
      })
      

    }
    updatebill(id:number){
      if(this.postdata.sum_bill != "" && this.postdata.category != "" && this.postdata.date != "" ){
      let url = 'http://localhost/appdata/updatebill.php'
  
      let postdataset = new FormData();
      postdataset.append('bill_id',id.toString());
      postdataset.append('sum_bill',this.postdata.sum_bill);
      postdataset.append('category',this.postdata.category); 
      postdataset.append('date',this.postdata.date); 
      postdataset.append('note',this.postdata.note); 
      let callback:Observable<any> = this.http.post(url,postdataset);
      callback.subscribe(call =>{
        if(call.status == 200){
        }else{
        }
      });

      const alert = document.createElement('ion-alert');
      alert.message = 'การอัพเดทบิลเสร็จสมบูรณ์';
      alert.buttons = ['ตกลง'];
    
      document.body.appendChild(alert);
      return alert.present();
    }else{
      const alert = document.createElement('ion-alert');
      alert.message = 'กรุณากรอกข้อมูลให้ครบ';
      alert.buttons = [
        {
          text: 'ตกลง',
          handler: () => {
          }
        }
      ];
        document.body.appendChild(alert);
        return alert.present()
  
    }
  }

  ngOnInit() {
  }

}
