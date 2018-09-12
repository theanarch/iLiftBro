import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Items } from '../../providers';
// import { Observable } from 'rxjs/Observable';
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
    var requestedWeekId = "week" + this.item.week;
    this.populateWeek(requestedWeekId);

    // this.ionViewDidLoad(requestedWeekId);
  }

  private RoundTo(calcWeight: number)
  {
    let roundTo = 2.5;
    return roundTo * Math.round(calcWeight*0.8*roundTo);
  }

  public weightCalc(week: string, day: string, workout: string, set: number): string 
  {
    let calculatedWeight;
    // calculatedWeight

    return "80";
  }

  populateWeek(requestedWeekId: string) {
    console.log(requestedWeekId.toString());
    var filePath = "./assets/data/"+ requestedWeekId +".json";

    // var filePath = "./assets/data/week1.json";

    //variable declaration
    var workoutDay = "";
    var weekName = "";
    var dayName = "";
    var workoutName = "";

    let weightCalc = (week: string, day: string, workout: string, set: number) => {
      if (workout != 'Squat' && workout != 'Bench Press' && workout != 'Deadlift') {
        return ' ';
      }
      else {
        return this.weightCalc(week, day, workout, set);
      }
    }

    $.getJSON(filePath, function (json) {
      let weekdays = json[0].Days;
      weekName = json[0].Name;

      workoutDay += "<ng-container>";
      for (var j = 0; j < weekdays.length; j++) { //loops days
        let day = weekdays[j];
        dayName = day.Name;

        workoutDay += "<h3>Day " + (j + 1) + "</h3>";
        workoutDay += "<table>";
        workoutDay += "<thead>";
        workoutDay += "<tr>"
        workoutDay += "<th>Workout</th>";
        workoutDay += "<th>Set1</th>";
        workoutDay += "<th>Set2</th>";
        workoutDay += "<th>Set3</th>";
        workoutDay += "<th>Set4</th>";
        workoutDay += "</tr>";
        workoutDay += "</thead>";
        for (var k = 0; k < day.Workouts.length; k++) { //loops workouts
          let workday = day.Workouts[k];
          workoutName = workday.Name;

          workoutDay += "<tbody>";
          workoutDay += "<tr>";
          workoutDay += "<td>";
          workoutDay += workday.Name;
          workoutDay += "</td-col>";
          workoutDay += "<td>";
          let weight = weightCalc(weekName, dayName, workoutName, 1);
          workoutDay +=  weight + "/" + workday.Set1;
          workoutDay += "</td>";
          workoutDay += "<td>";
          let weight2 = weightCalc(weekName, dayName, workoutName, 2);
          workoutDay += weight2 + "/" + workday.Set2;
          workoutDay += "</td>";
          workoutDay += "<td>";
          let weight3 = weightCalc(weekName, dayName, workoutName, 3);
          workoutDay += weight3 + "/" + workday.Set3;
          workoutDay += "</td>";
          workoutDay += "<td>";
          let weight4 = weightCalc(weekName, dayName, workoutName, 4);
          workoutDay += weight4 + "/" + workday.Set4;
          workoutDay += "</td>";
          workoutDay += "</tr>";
          workoutDay += "</tbody>";
        }
        workoutDay += "</table>"
      }
      workoutDay += "</ng-container>"

      $('#workOutPlan').append(workoutDay);
    });
  }

}