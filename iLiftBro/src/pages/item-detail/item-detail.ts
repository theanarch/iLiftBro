import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import { HttpClient } from '@angular/common/http';


// import { Storage } from '@ionic/storage';
// import { ITest } from './ITest';
// import { Injectable } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  tests: string = '';
  jsonurl: string = '../assets/data/testJson.json';

  constructor(public navCtrl: NavController,
    navParams: NavParams,
    items: Items,
    private storage: Storage,
    public http: HttpClient) {
    this.item = navParams.get('item') || items.defaultItem;

  }

  // getLocalData() {
  // this.http.get('assests/data/testJson.json').map(res => res.json()).subscribe(data => {
  //     console.log(data);
  //   };
  // }
}

