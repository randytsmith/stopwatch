import React from 'react';
import ReactDOM from 'react-dom';

function formatElapsedTime(elapsedMillisecond){
  if (typeof(elapsedMillisecond) != Number) {
    return "00:00:00"
  }

  var milliseconds = parseInt((elapsedMillisecond%1000)/100)
        , seconds = parseInt((elapsedMillisecond/1000)%60)
        , minutes = parseInt((elapsedMillisecond/(1000*60))%60)
        , hours = parseInt((elapsedMillisecond/(1000*60*60))%24);



    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

  if (hours > 0) {
    return minutes + ":" + seconds + "." + milliseconds;
  } else {
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

module export formatElapsedTime;
