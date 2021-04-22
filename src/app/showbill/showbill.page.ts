import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
import { ActivatedRoute,Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-showbill',
  templateUrl: './showbill.page.html',
  styleUrls: ['./showbill.page.scss'],
  providers: [NavParams],
})
export class ShowbillPage implements OnInit {

  dataitem: any =[];
  dataitemshowbill: any =[];
  postdata: any ={};
  sum_bill:number;
  category:string;
  date: string;
  note: string;
  status:string;
  color:string;
  bill_id:number;
  showitem: boolean;
  datashow: any = [];
  constructor(public navCtrl: NavController,
    public navparm: NavParams,
    public http: HttpClient,
    public route: ActivatedRoute,
    public router: Router,
    public alertController: AlertController) { 

      this.route.queryParams.subscribe(params =>{
        console.log('params: ',params);
        if (params && params.bill_id){
          this.bill_id = params.bill_id;
          this.sum_bill = params.sum_bill;
          this.category = params.category;
          this.date = params.date;
          this.note = params.note;
          this.status = params.status;
          this.ckechstatus();
          this.datashow = [{bill_id:this.bill_id, sum_bill:this.sum_bill ,category:this.category , date:this.date, note:this.note , status:this.status}];
        } console.log('datashow: ',this.datashow);
      })
      this.sendbill_id();
      

    }

  
  sendbill_id(){
      let url = 'http://localhost/appdata/loadshowbill.php'
      let postdata = new FormData();
      postdata.append('bill_id',this.datashow.bill_id);
      this.http.post(url,postdata).subscribe(data => {
        if(data != null){
          this.http.get(url)
            .subscribe(data=> {
            if(data != null){
              this.dataitemshowbill = data;
              console.log("done.",data);
      }
    },error=>{
      this.dataitemshowbill = data;
      console.log("load fial.")
  
    });   
        }
      },error=>{});  
      }

      ckechstatus(){
        if(this.status != 'ยังไม่ชำระ'){
          this.showitem = false;
        }else{
          this.showitem = true;
        }
        

      };

      deletedata(id:number){
        let url = 'http://localhost/appdata/deletebill.php'
    
        let postdata = new FormData();
        postdata.append('bill_id',id.toString());
        
        this.http.post(url,postdata).subscribe(data => {
          if(data != null){}
        },error=>{
    
        });
          
          this.router.navigate(['sum-bill'])
      
      }
        btdelete(id:number){
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
              this.deletedata(id);
              
            }
          }
          
        ];
          document.body.appendChild(alert);
          return alert.present();
        
        
        }
        confirmbilldata(id:number){
        let url = 'http://localhost/appdata/confirmbill.php'
        let postdata = new FormData();
        postdata.append('bill_id',id.toString());
        this.http.post(url,postdata).subscribe(data => {
          if(data != null){  
          }
        },error=>{});
          this.router.navigate(['sum-bill'])
        }
        confirmbill(id:number){
          const alert = document.createElement('ion-alert');
          alert.message = 'คุณต้องการยืนยันการชำระบิล หรือไม่?';
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
                this.confirmbilldata(id);
                
              }
            }
            
          ];
            document.body.appendChild(alert);
            return alert.present();
    
        
         }
         billshow(id:number, sum_bill:number, category:string, date:string, note:string, status:string){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              bill_id: id ,
              sum_bill: sum_bill,
              category: category,
              date: date,
              note: note,
              status: status
            }
          }
          this.router.navigate(['editbill'], navigationExtras);
          
        }
    

  ngOnInit() {
  }

}
