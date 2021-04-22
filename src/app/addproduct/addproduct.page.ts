import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.page.html',
  styleUrls: ['./addproduct.page.scss'],
})
export class AddproductPage implements OnInit {
  productList:any; 
  constructor(public navCtrl: NavController, public http: HttpClient) { }
  ionViewDidLoad(){
    this.getData(); 
    }
    goAddNew(){
    
    }
    getData(){
    this.http.get("http://localhost/appdata/test.php").subscribe( data => {
      if(data != null){
        this.productList= data;
        console.log("done.",data);

      }
    })};
  ngOnInit() {
  }

}
