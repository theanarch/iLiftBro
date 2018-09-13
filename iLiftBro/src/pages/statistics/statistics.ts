import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  public typo: string = 'scheisse';

  public data2: {};


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data2 = {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
      datasets: [
        {
          label: 'Actual',
          data: [65, 59, 80, 81, 56, 55],
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Projected',
          data: [70, 60, 100, 90, 60, 60],
          fill: false,
          borderColor: '#565656'
        }
      ]

    }
  }

  ionViewDidLoad() {
  }

}
