import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginPage } from './login/login.page';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [NavParams],
})
export class AppComponent {
  sent:string = '0';
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private router: Router
  ) {
    this.initializeApp();

  }
  logout(){
    let url = 'http://localhost/appdata/logout.php'
    let postdataset = new FormData();
    postdataset.append('sent',this.sent);
    let callback2:Observable<any> = this.http.post(url,postdataset);
    callback2.subscribe(call =>{
    if(call.status == 200){
    }else{
    }
  });
    
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
