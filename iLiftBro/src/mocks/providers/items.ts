import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "week": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "weekDescription": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "week": "1",
        "profilePic": "assets/img/speakers/bear.jpg",
        "weekDescription": "Muscular Conditioning"
      },
      {
        "week": "2",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "weekDescription": "Conditioning/Hypertrophy"
      },
      {
        "week": "3",
        "profilePic": "assets/img/speakers/duck.jpg",
        "weekDescription": "Linear Max OT Phase"
      },
      {
        "week": "4",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "weekDescription": "Heavy Weight Acclimation"
      },
      {
        "week": "5",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "weekDescription": "High Intensity Strength"
      },
      {
        "week": "6",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "weekDescription": "¡End Game!"
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
