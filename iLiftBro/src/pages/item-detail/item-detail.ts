import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Http } from '@angular/http';
// import { WeekDay } from '@angular/common';
// import { File } from '@ionic-native/file';
// import { Injectable } from '@angular/core';
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
    var requestedWeekId = "week" + this.item.week;
    this.ionViewDidLoad(requestedWeekId);
  }

  public getJSONDataAsync(filePath: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(filePath)
        .subscribe(
          res => {
            if (!res.ok) {
              reject("Failed with status: " + res.status + "\nTrying to find fil at " + filePath);
            }

            var jsonRes = res.json();

            resolve(jsonRes);
          }
        );
    }).catch((reason) => this.handleError(reason));
  }

  /* Takes an error, logs it to the console, and throws it */
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  ionViewDidLoad(weekId: string) {
    // var filePath = "./assets/data/"+ weekId +".json";
    this.getJSONDataAsync("./assets/data/MyTest.json").then(data => {
      this.SetQueryOptionsData(data);
    });
  }

  SetQueryOptionsData(data: any) {
    this.TestJson = data;
  }
}