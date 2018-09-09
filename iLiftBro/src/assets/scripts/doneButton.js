function Done(objId) {
    var weekId = "week" + objId.substring(6); //retrieving Id from button. "button" has 6 letters => starting from 6 
    var textDecoration = document.getElementById(weekId).style.getPropertyValue("text-decoration");
    var textColor;

    if (textDecoration != "line-through") {
        textDecoration = "line-through";
        textColor = "lightgreen";
    } else {
        textDecoration = "";
        textColor = "";
    }
    document.getElementById(weekId).style.setProperty("text-decoration", textDecoration);
    document.getElementById(weekId).style.webkitTextFillColor = textColor;

}

