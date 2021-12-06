//Created by Kacy Hyndman on December 5th, 2021
//Source: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
//NOTE: Not much was changed from the source material here as I don't enough of a grasp on javascript to make it my own

function navFunction() {
  var x = document.getElementById("navBarJS");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}