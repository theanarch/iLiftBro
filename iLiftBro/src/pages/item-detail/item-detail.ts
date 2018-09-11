import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})

export class ItemDetailPage {
  item: any;
  Week: any[];
  TestJson: any[];


  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, public http: Http) {
    this.item = navParams.get('item') || items.defaultItem;
    
    //Loading json file
    // var requestedWeekId = "week" + this.item.week;
    // this.ionViewDidLoad(requestedWeekId);
  }

  // public getJSONDataAsync(filePath: string): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //     this.http.get(filePath)
  //       .subscribe(
  //         res => {
  //           if (!res.ok) {
  //             reject("Failed with status: " + res.status + "\nTrying to find fil at " + filePath);
  //           }

  //           var jsonRes = res.json();

  //           resolve(jsonRes);
  //         }
  //       );
  //   }).catch((reason) => this.handleError(reason));
  // }

  // /* Takes an error, logs it to the console, and throws it */
  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || '';
  //     const err = JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Observable.throw(errMsg);
  // }


populateWeek(){
  var workoutDay = "";

    $.getJSON("./assets/data/MyTest.json", function (json) {
        console.log(json)
        let weekdays = json[0].Days;
        for (var j = 0; j < weekdays.length; j++) { //loops days
            let day = weekdays[j];
            // workoutDay += "<ng-container padding>";
            workoutDay += "<h3>Day " + j + "</h3>";
            workoutDay += "<ion-grid>";
            workoutDay += "<ion-row>"
            workoutDay += "<ion-col col-3 offset-1>Workout</ion-col>";
            workoutDay += "<ion-col col-3 offset-1>Set1</ion-col>";
            workoutDay += "<ion-col col-3 offset-1>Set2</ion-col>";
            workoutDay += "<ion-col col-3 offset-1>Set3</ion-col>";
            workoutDay += "<ion-col col-3 offset-1>Set4</ion-col>";
            workoutDay += "</ion-row>";
            workoutDay += "</ion-grid >";
            for (var k = 0; k < day.Days.length; k++) { //loops days
                let workday = day.Days[k];
                console.log(workday.Name + " " + workday.Set1 + " " + workday.Set2 + " " + workday.Set3 + " " + workday.Set4);
            }
        }
        // console.log(document.getElementById('asdf'));
        $('#asdf').append(workoutDay);
    });
}



  ionViewDidLoad(weekId: string) {
    // var filePath = "./assets/data/"+ weekId +".json";
    // this.getJSONDataAsync("./assets/data/MyTest.json").then(data => {
    //   this.SetQueryOptionsData(data);
    // });

    this.populateWeek();
  }


  SetQueryOptionsData(data: any) {
    this.TestJson = data;
  }


}