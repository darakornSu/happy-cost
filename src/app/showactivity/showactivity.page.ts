import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";

@Component({
  selector: 'app-showactivity',
  templateUrl: './showactivity.page.html',
  styleUrls: ['./showactivity.page.scss'],
})
export class ShowactivityPage implements OnInit {

  dataitem: any =[];
  dataitemshowbill: any =[];
  postdata: any ={};
  cost:number;
  topic:string;
  date: string;
  note: string;
  activity_id:number;
  datashow: any = [];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 

      this.route.queryParams.subscribe(params =>{
        if (params && params.activity_id){
          this.activity_id = params.activity_id;
          this.cost = params.cost;
          this.topic = params.topic;
          this.date = params.date;
          this.note = params.note;
          this.datashow = [{activity_id:this.activity_id, cost:this.cost , topic:this.topic , date:this.date, note:this.note }];
        } 
      })
      
    }
    btdeleteactivity(id:number){
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
            this.deletedataactivity(id)
            

          }
        } 
      ];
        document.body.appendChild(alert);
        return alert.present();
      }

    deletedataactivity(id:number){
      let url = 'http://localhost/appdata/deleteactivity.php'
      let postdata = new FormData();
      postdata.append('activity_id',id.toString());
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
        }
      },error=>{
      }); 
      this.navCtrl.navigateRoot('/home');
    }
    editactivity(id:number){
      let navigationExtras: NavigationExtras = {
        queryParams: {
          activity_id: id ,
        }
      }
      this.router.navigate(['editactivity'], navigationExtras);
      
    }

  ngOnInit() {
  }

}
