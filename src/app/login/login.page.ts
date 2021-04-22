import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { UserPage } from '../user/user.page';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [NavParams],
})
export class LoginPage implements OnInit {
  logindata: any =[];
  dataitem: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private router: Router) { 
      this.logindata.username = "";
      this.logindata.password = "";
    }
  
    checklogin(){
      const alert = document.createElement('ion-alert');
      alert.message = 'คุณต้องเข้าสู่ระบบ หรือไม่?';
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
            this.loaddata();
            
          }
        }
        
      ];
        document.body.appendChild(alert);
        return alert.present()

    }

    loginUser(){
      if(this.logindata.username != "" && this.logindata.password != ""){
      let url = 'http://localhost/appdata/login.php'
      let postdataset = new FormData();
      postdataset.append('username',this. logindata.username);
      postdataset.append('password',this. logindata.password);
      let callback2:Observable<any> = this.http.post(url,postdataset);
      callback2.subscribe(call =>{
      if(call.status == 200){
      }else{
      }
    });
      this.checklogin()
    }else{
      const alert = document.createElement('ion-alert');
      alert.message = 'กรุณากรอกรหัสผ่าน';
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
      let url = "http://localhost/appdata/loadlogin.php";
      this.http.get(url)
      .subscribe(data=> {
        if(data != null){
          this.dataitem = data;
          console.log("done.",data);
          this.navCtrl.navigateRoot('/home');
        }
      },error=>{
        console.log("load fial.")
        const alert = document.createElement('ion-alert');
        alert.message = 'รหัสผ่านไม่ถูกต้อง! โปรดลองอีกครั้ง';
        alert.buttons = [
        {
          text: 'ตกลง',
          handler: () => {
          }
        }
      ];
        document.body.appendChild(alert);
        return alert.present()
    
      });
    }
  
  ngOnInit() {
  }

}
