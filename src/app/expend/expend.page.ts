import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-expend',
  templateUrl: './expend.page.html',
  styleUrls: ['./expend.page.scss'],
})
export class ExpendPage implements OnInit {
  postdata: any =[];
  dataitem: any =[];
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public alertController: AlertController) { 
                this.postdata.sum_revenue = "";
                this.postdata.category= "";
                this.postdata.date= "";
                this.loaddata()
              }

  
  save(){
    if(this.postdata.sum_expend != "" && this.postdata.category != "" && this.postdata.date != "" ){
    let url = 'http://localhost/appdata/insertdata.php'
    let postdataset = new FormData();
    postdataset.append('sum_expend',this.postdata.sum_expend);
    postdataset.append('category',this.postdata.category); 
    postdataset.append('date',this.postdata.date); 
    postdataset.append('note',this.postdata.note); 
    
    
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
      }else{
      }
    });
    let url2 = 'http://localhost/appdata/insertcost.php'

    let postdataset2 = new FormData();
    postdataset2.append('user_name',this.postdata.user_name);
    postdataset2.append('cost',this.postdata.sum_expend);
    postdataset2.append('category',this.postdata.category); 
    postdataset2.append('date',this.postdata.date); 
    postdataset2.append('note',this.postdata.note); 
    postdataset.append('color',this.postdata.color); 
    
    let callback2:Observable<any> = this.http.post(url2,postdataset2);
    callback2.subscribe(call =>{
      if(call.status == 200){
      }else{}});
    const alert = document.createElement('ion-alert');
    alert.message = 'การบันทึกรายจ่ายเสร็จสมบูรณ์';
    alert.buttons = [
      {
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.navigateRoot('/cost');
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
