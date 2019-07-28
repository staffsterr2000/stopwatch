"use strict";

var t= 0;
var checkStart= 0;

var timerNode= document.createTextNode("0");
var timer= document.createElement("p");
timer.appendChild(timerNode);
document.body.appendChild(timer);

function time() {
  t++;
  timer.innerHTML= t;
}

function start() {
  checkStart++;
  if(checkStart == 1){
    var interval= setInterval(time, 1000);
  }
}

function stop() {
  clearInrerval(interval);
  checkStart= 0;
}

// //pause(){
//
// //}
