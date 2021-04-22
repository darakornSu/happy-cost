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
  selector: 'app-editactivity',
  templateUrl: './editactivity.page.html',
  styleUrls: ['./editactivity.page.scss'],
})
export class EditactivityPage implements OnInit {

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
      this.postdata.topic = "";
      this.postdata.category= "";
      this.postdata.date= "";
      this.postdata.cost= "";
      this.route.queryParams.subscribe(params =>{
        if (params && params.activity_id){
          this.activity_id = params.activity_id;
          this.cost = params.cost;
          this.topic = params.topic;
          this.date = params.date;
          this.note = params.note;
          this.datashow = [{activity_id:this.activity_id, cost:this.cost , topic:this.topic , date:this.date, note:this.note }];
        } console.log('datashow: ',this.datashow);
      })
      
    }
    editactivity(id:number){
      if(this.postdata.topic != "" && this.postdata.category != "" && this.postdata.date != "" && this.postdata.cost != "" && this.postdata.note != "" ){
      const alert = document.createElement('ion-alert');
      alert.message = 'คุณต้องอัพเดทกิจกรรมนี้ หรือไม่?';
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
            this.editdataactivity(id)
            

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

    editdataactivity(id:number){

      let url = 'http://localhost/appdata/updateactivity.php'
      let postdata = new FormData();
      postdata.append('activity_id',id.toString());
      postdata.append('topic',this.postdata.topic);
      postdata.append('date',this.postdata.date); 
      postdata.append('note',this.postdata.note);
      postdata.append('cost',this.postdata.cost); 
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
        }
      },error=>{
      }); 
      this.navCtrl.navigateRoot('/sum-activity');
    }

  ngOnInit() {
  }

}
