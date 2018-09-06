import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
import { File } from '@ionic-native/file'; 

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items, private file: File) {
    this.item = navParams.get('item') || items.defaultItem;

    // this.file.checkDir(this.file.dataDirectory, '../assets/data/convertcsv(normal).json').then(_ => console.log('Direc exists')).catch(err => console.log('Direc does not exist'));
  }

  
}
