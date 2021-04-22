import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavigationExtras } from '@angular/router';
import { ActivatedRoute,Router } from '@angular/router';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { CostPage } from '../cost/cost.page';

@Component({
  selector: 'app-showrevenue',
  templateUrl: './showrevenue.page.html',
  styleUrls: ['./showrevenue.page.scss'],
})
export class ShowrevenuePage implements OnInit {

  dataitem: any =[];
  dataitemshowbill: any =[];
  postdata: any ={};
  sum_revenue:number;
  category:string;
  date: string;
  note: string;
  revenue_id:number;
  datashow: any = [];
  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public route: ActivatedRoute,
    public http: HttpClient,
    public router: Router,
    public alertCtrl: AlertController) { 

      this.route.queryParams.subscribe(params =>{
        if (params && params.revenue_id){
          this.revenue_id = params.revenue_id;
          this.sum_revenue = params.sum_revenue;
          this.category = params.category;
          this.date = params.date;
          this.note = params.note;
          this.datashow = [{revenue_id:this.revenue_id, sum_revenue:this.sum_revenue ,category:this.category , date:this.date, note:this.note }];
        } 
      })
      
    }

    btdeleterevenue(id:number, sentsum:number){
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
            this.deletedatarevenue(id,sentsum)
            

          }
        } 
      ];
        document.body.appendChild(alert);
        return alert.present();
      }

    deletedatarevenue(id:number,sentsum:number){
      let url = 'http://localhost/appdata/deleterevenue.php'
      let postdata = new FormData();
      postdata.append('revenue_id',id.toString());
      postdata.append('sum_revenue',sentsum.toString());
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
        }
      },error=>{
      }); 
      this.navCtrl.navigateRoot('/cost');
    }

    
  ngOnInit() {
  }

}
