

 //blizard.js version 0.1 BETA by Rohan Samra-O'Neill
"use strict";

var sl = {};
var id;
var storage;

console.info("This project uses blizard.js for more info go to https://github.com/Slitherlizard/blizard.js");

//with sl.print the first parameter is the id of the element you want to change the second is the text you want to change it to
sl.print = function (sel, txt) {
  document.getElementById(sel).innerHTML = txt;
};
//with sl.hide the parameter is the id of the element you want to hide
sl.hide = function (sel) {
     id = document.getElementById(sel);
     id.style.display = "none";
  };
  //with sl.show the parameter is the id of the element you want to show
  sl.show = function (sel) {
    id = document.getElementById(sel);
    id.style.display = "block";
 };
 //with sl.col the first parameter is the id of the element you want to change the color of, the second parameter is the color you want to change it to
 sl.col = function(sel, col) {
    document.getElementById(sel).style.color = col;
 } 
 //with sl.family the first parameter is the id of the element you want to change the font-family of, the second parameter is the font family you want to change it to
 sl.family = function(sel, sel2) {
    document.getElementById(sel).style.fontFamily = sel2;
 }
 //with sl.size the first parameter is the id of the element you want to change the size of, the second parameter is the size you want to change it to these are the sizes you can use
/*
xx-small
x-small
small
medium
large
x-large
xx-large
smaller	
larger
*/

sl.size = function(sel, sel2) {
   document.getElementById(sel).style.fontSize = sel2;
}
//with sl.wait the first parameter is where you call the function you want to run, the second parameter is the amount of milliseconds you want towait to call that function
sl.wait = function(sel, sel2) {
    window.setTimeout(sel, sel2);
}

// with sl.setlocalstorage the first parameter is the name of your localstorge item so that you can refer to it later, the second parameter is the value of your item.
sl.setlocalstorage = function(sel, sel2) {
   localStorage.setItem(sel, sel2);
}
// with sl.printlocalstorage the first parameter is the name of the localstorge item you want to print the value of, the second parameter is the id of the element you want to print the item's value to.

sl.printlocalstorage = function(sel, sel2) {
   
   document.getElementById(sel).innerHTML = localStorage.getItem(sel2);;
}
// more functions in development
