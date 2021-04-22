import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.page.html',
  styleUrls: ['./user-edit.page.scss'],
  providers: [NavParams],
})
export class UserEditPage implements OnInit {
  postdata: any =[];
  dataitem: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController) { 
      this.loaddata();
     
    }

  updateuser(id:number){
    const alert = document.createElement('ion-alert');
    alert.message = 'คุณต้องการอัพเดทข้อมูลหรือไม่?';
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
          this.saveUpdate(id);
          
        }
      }
      
    ];
      document.body.appendChild(alert);
      return alert.present();

  
   }

   saveUpdate(id:number){
    let url = 'http://localhost/appdata/updateuser.php'

    let postdataset = new FormData();
    postdataset.append('username',this.postdata.username);
    postdataset.append('email',this.postdata.email);
    postdataset.append('user_id',id.toString());
    
    let callback:Observable<any> = this.http.post(url,postdataset);
    callback.subscribe(call =>{
      if(call.status == 200){}else{}});
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
