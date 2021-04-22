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
  selector: 'app-showexpend',
  templateUrl: './showexpend.page.html',
  styleUrls: ['./showexpend.page.scss'],
})
export class ShowexpendPage implements OnInit {

  dataitem: any =[];
  dataitemshowbill: any =[];
  postdata: any ={};
  sum_expend:number;
  category:string;
  date: string;
  note: string;
  expend_id:number;
  datashow: any = [];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 

      this.route.queryParams.subscribe(params =>{
        console.log('params: ',params);
        if (params && params.expend_id){
          this.expend_id = params.expend_id;
          this.sum_expend = params.sum_expend;
          this.category = params.category;
          this.date = params.date;
          this.note = params.note;
          this.datashow = [{expend_id:this.expend_id, sum_expend:this.sum_expend ,category:this.category , date:this.date, note:this.note }];
        } 
      })
      
    }

    btdeleteexpend(id:number,sentsum:number){
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
            this.deletedataexpend(id,sentsum)  
          }
        } 
      ];
        document.body.appendChild(alert);
        return alert.present();
      }

    deletedataexpend(id:number ,sentsum:number){
      let url = 'http://localhost/appdata/deleteexpend.php'
      let postdata = new FormData();
      postdata.append('expend_id',id.toString());
      postdata.append('sum_expend',sentsum.toString());
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){}
      },error=>{
      });
      this.navCtrl.navigateRoot('/cost');
     }

    


  ngOnInit() {
  }

}
