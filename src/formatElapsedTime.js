
function formatElapsedTime(elapsedMillisecond){
  if (typeof(elapsedMillisecond) !== "number") {
    return "00:00:00";
  }

  let milliseconds = parseInt((elapsedMillisecond%1000)/10)
        , seconds = parseInt((elapsedMillisecond/1000)%60)
        , minutes = parseInt((elapsedMillisecond/(1000*60))%60)
        , hours = parseInt(elapsedMillisecond/(1000*60*60));

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;

  let time = ((hours === 0) ? "" : hours + ":") + minutes + ":" + seconds + "." + milliseconds

  return time
}

export default formatElapsedTime;
