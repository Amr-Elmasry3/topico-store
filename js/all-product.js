// Access To Used Elements
let filterIcon= document.querySelector(".filter-icon");
let filter= document.querySelector(".filter");

// Part Of Variables
let state= "none";

// Part Of Main Code
filterIcon.onclick= function () {
  if (state === "none") {
    filter.style.cssText= "display: block";
    state= "block";
  }
  else {
    filter.style.cssText= "display: none";
    state= "none";
  }
}