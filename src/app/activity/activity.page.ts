import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.scss'],
})
export class ActivityPage implements OnInit {
  dataitem: any =[];
  postdata: any =[];
  
  constructor(public navCtrl: NavController,
              public http: HttpClient,
              public alertController: AlertController) { 
                this.postdata.topic = "";
                this.postdata.date= "";
                this.postdata.cost= "";
                this.loaddata()
              }

  
  save(){
    if(this.postdata.topic != ""  && this.postdata.date != "" && this.postdata.cost != "" && this.postdata.note != "" ){
    let url = 'http://localhost/appdata/insertactivity.php'
    let postdataset = new FormData();
    postdataset.append('topic',this.postdata.topic);
    postdataset.append('date',this.postdata.date); 
    postdataset.append('note',this.postdata.note);
    postdataset.append('cost',this.postdata.cost); 
    
    
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){
      }else{
      }
    });
    const alert = document.createElement('ion-alert');
    alert.message = 'การบันทึกกิจกรรมเสร็จสมบูรณ์';
    alert.buttons = [
      {
        text: 'ตกลง',
        handler: () => {
          this.navCtrl.navigateRoot('/sum-activity');
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
        console.log("done.");
      }
    },error=>{
      console.log("load fial.")
  
    });
  }

  ngOnInit() {
  }

}
