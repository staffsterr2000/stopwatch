"use strict";

var t= 0;

var timerNode= document.createTextNode("");
var timer= document.createElement("p");
timer.appendChild(timerNode);
document.body.appendChild(timer);

function time() {
  t++;
  timerNode.innerHTML= "t";
}

function start() {
  setInterval(time, 1000);
}

function stop(){
  clearInrerval(time, 1000);
}

//pause(){

//}
