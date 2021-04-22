import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.page.html',
  styleUrls: ['./bill.page.scss'],
})
export class BillPage implements OnInit {
  dataitem: any =[];
  postdata: any ={};
  constructor(public navCtrl: NavController,
    public http: HttpClient,
    public alertController: AlertController) { 
      this.postdata.sum_bill = "";
      this.postdata.category= "";
      this.postdata.date= "";
      this.loaddata()
    }

    savebill(){
      if(this.postdata.sum_bill != "" && this.postdata.category != "" && this.postdata.date != "" ){
      let url = 'http://localhost/appdata/insertbill.php'
  
      let postdataset = new FormData();
      postdataset.append('user_name',this.postdata.user_name);
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
      alert.message = 'การบันทึกบิลเสร็จสมบูรณ์';
      alert.buttons = [
        {
          text: 'ตกลง',
          handler: () => {
            this.navCtrl.navigateRoot('/sum-bill');
          }
        }
      ];
    
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
