import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.data = {
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
          data: [28, 48, 40, 19, 86, 90],
          fill: false,
          borderColor: '#565656'
        }
      ]

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatisticsPage');
  }

}
