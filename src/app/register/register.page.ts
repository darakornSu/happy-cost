import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerdata: any =[];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private router: Router) { 
      this.registerdata.username = "";
      this.registerdata.email = "";
      this.registerdata.password = "";
    }
  

  registerUser(){

    if(this.registerdata.username != "" && this.registerdata.email != "" && this.registerdata.password != "" && this.registerdata.password == this.registerdata.password2 ){

    let url = 'http://localhost/appdata/register.php'
    let postdataset = new FormData();
    postdataset.append('username',this.registerdata.username);
    postdataset.append('password',this.registerdata.password);
    postdataset.append('email',this.registerdata.email);
    let callback2:Observable<any> = this.http.post(url,postdataset);
    callback2.subscribe(call =>{
    if(call.status == 200){}else{}});
    const alert = document.createElement('ion-alert');
      alert.message = 'คุณได้ลงทะเบียนเรียบร้อย';
      alert.buttons = [
        {
          text: 'ตกลง',
          handler: () => {
            this.router.navigateByUrl('/(LoginPage');
          }
        }
      ];
        document.body.appendChild(alert);
        return alert.present()
  }else{
    const alert = document.createElement('ion-alert');
      alert.message = 'กรุณากรอกข้อมูลให้ถูกต้อง';
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
