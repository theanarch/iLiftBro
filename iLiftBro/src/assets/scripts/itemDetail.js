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


var appendedHTML = "";

    $.getJSON("./assets/data/MyTest.json", function (json) {

        let weekdays = json[0].Days;
        for (var j = 0; j < weekdays.length; j++) { //loops days
            let day = weekdays[j];
            // appendedHTML += "<ng-container padding>";
            appendedHTML += "<h3>Day" + j + "</h3>";
            // appendedHTML += "<ion-grid class='sets'>";
            // appendedHTML += "<ion-row>"
            // appendedHTML += "<ion-col>Workout</ion-col>";
            // appendedHTML += "<ion-col>Set1</ion-col>";
            // appendedHTML += "<ion-col>Set2</ion-col>";
            // appendedHTML += "<ion-col>Set3</ion-col>";
            // appendedHTML += "<ion-col>Set4</ion-col>";
            // appendedHTML += "</ion-row>";
            // appendedHTML += "</ion - grid >";
            for (var k = 0; k < day.Days.length; k++) { //loops days
                let workday = day.Days[k];
                console.log(workday.Name + " " + workday.Set1 + " " + workday.Set2 + " " + workday.Set3 + " " + workday.Set4);
            }
        }
        console.log(document.getElementById('asdf'));
        // document.getElementById('megasuper').insertAdjacentHTML = "<h3>Day 1</h3>";
    });

var appendedHTML = "";
appendedHTML += "<ng-container padding>";
appendedHTML += "<h3>Day" + 777 + "</h3>";


function DoIt() {
    alert("onload funkar");
    console.log("funbkar här");
}