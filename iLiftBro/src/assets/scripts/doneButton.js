// function Done(objId) {
//     var listElementId = "week" + objId.substring(6); //retrieving Id from button. "button" has 6 letters => starting from 6 
//     var listElement = document.getElementById(listElementId);
//     var buttonElement = document.getElementById(objId);

//     // instanstiating new variables
//     var textDecoration = listElement.style.getPropertyValue("text-decoration"); // gets current text-decoration status
//     var textColor;
//     var buttonText;
//     var backgroundColor;

//     if (textDecoration != "line-through") {
//         textDecoration = "line-through";
//         textColor = "lightgreen";
//         buttonElement.innerText = "Undone";
//         backgroundColor = grey;
//     } else {
//         textDecoration = "";
//         textColor = "";
//         // backgroundColor = "lightgreen";
//     }
//     listElement.style.setProperty("text-decoration", textDecoration);
//     listElement.style.webkitTextFillColor = textColor;
//     buttonElement.setProperty("color", backgroundColor)
// }

