// var appendeShit += "<ng-container *ngFor="let day of TestJson" padding>"
// <h3>Day {{day.Day.Id}}</h3>
// <ion-grid class="sets">
//   <ion-row>
//     <ion-col>Workout</ion-col>
//     <ion-col>Set1</ion-col>
//     <ion-col>Set2</ion-col>
//     <ion-col>Set3</ion-col>
//     <ion-col>Set4</ion-col>
//   </ion-row>
// </ion-grid>
// <ion-grid *ngFor="let s of day.Day">
//   <ion-row align-items-center>
//     <ion-col>
//       <div>{{s.Workout}}</div>
//     </ion-col>
//     <ion-col>
//       <div>{{s.Set1}}</div>
//     </ion-col>
//     <ion-col>
//       <div>{{s.Set2}}</div>
//     </ion-col>
//     <ion-col>
//       <div>{{s.Set3}}</div>
//     </ion-col>
//     <ion-col>
//       <div>{{s.Set4}}</div>
//     </ion-col>
//   </ion-row>
// </ion-grid>
// </ng-container>





function DoIt() {
    $.getJSON("./assets/data/MyTest.json", function (json) {

        for (var i = 0; i < json.length; i++) { //loops days
            let weekdays = json[0].Days;
            // console.log(weekdays);
            for (var j = 0; j < weekdays.length; j++) { //loops days
                let day = weekdays[j];
                console.log(day);
                for (var k = 0; k < day.Days.length; k++) { //loops days
                    let workday = day.Days[k];
                    console.log(workday);
                    for(var l = 0; l < workday.length; l++){//workouts
                        let workout = workday[l];
                        console.log(workout);
                        for(var m = 0; m < workday.length; m++){ //sets
                            let workout = workday[m];
                            console.log(workout);
                    }
                }
            }
        }
    });
}