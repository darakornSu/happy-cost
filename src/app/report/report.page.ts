import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  NavController,
  NavParams,
  AlertController,
} from "@ionic/angular";
declare var google;
@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  providers: [NavParams],
})
export class ReportPage implements OnInit {
  datacost: any =[];
  test: any =[];
  saveData: any = [];   
  dataitem: any =[];
  showitem: boolean;

  constructor( public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    public alertCtrl: AlertController) { 
      this.load_totalcost(),
      this.loaddata()
    
    }

  showChart(total_expend:number,total_revenue:number,savings:number){
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['เงินออม', savings/1000],
      ['รายรับ', total_revenue/1000],
      ['รายจ่าย', total_expend/1000],

      
    
    ]);
    var options = {'title':'แผนภูมิสรุปรายรับรายจ่าย',
                   'width':400,
                   'height':300};
    var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);
    this.showitem = true;
  };
  
  load_totalcost(){
    let url2 = "http://localhost/appdata/load_totalcost.php";
    this.http.get(url2)
    .subscribe(data=> {
      if(data != null){
        this.datacost = data;
        console.log("done.",data);
        console.log("test",this.datacost.total_savings);
      }
    },error=>{
      console.log("load fial.")
  
    });
  }

  loaddata(){
    let url = "http://localhost/appdata/loaddata.php";
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

  saveAsCSV() {
    
    let sampleJson : any = [{name:'ganesh', age:'24'},{name:'ramesh', age:'24'},{name:'suresh', age:'24'}]
    this.saveData = [];    
    let a = document.createElement("a");    
     a.setAttribute('style', 'display:none;');    
     document.body.appendChild(a);    
    let csvData = this.ConvertToCSV(this.dataitem);    
    let blob = new Blob([csvData], { type: 'text/csv' });    
    let url= window.URL.createObjectURL(blob);    
     a.href = url;    
     a.download = 'Happy Cost.csv'; 
     a.click();    
}

ConvertToCSV(objArray) {    
     let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
     let str = '';
     let row = ""; 
     for (let index in objArray[0]) {
         //Now convert each value to string and comma-separated
         row += index + ',';
     }
     row = row.slice(0, -1);
     //append Label row with line break
     str += row + '\r\n';

     for (let i = 0; i < array.length; i++) {
         let line = '';
         for (let index in array[i]) {
             if (line != '') line += ',';
             line += array[i][index];
         }
         str += line + '\r\n';
     }
     return str;
 }

  ngOnInit() {
  }

}
