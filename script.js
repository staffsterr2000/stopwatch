"use strict";

var t= 0;
var checkStart= 0;
var checkStop= 0;

var timerNode= document.createTextNode("0");
var timer= document.createElement("p");
timer.appendChild(timerNode);
document.body.appendChild(timer);

function time(class) {
  if(class == 'start') {
    checkStart++;
    if(checkStart == 1)
    {
      var interval= setInterval( function time() {timer.innerHTML= t++; }, 1000);
    }
  }
  else {
    alert("WTF");
  }

  // else if(class == "stop") {
  //   checkStop++;
  //   if(checkStop == 1) {
  //     clearInterval(interval);
  //     timer.innerHTML= 0;
  //     checkStart= 0;
  // }
  // }
}
//
// // //pause(){
// //
// // //}


https://youtu.be/Gl8rGASgFAw?t=471
