let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("timer");


function padStart(value){
    return String(value).padStart(2,"0")
}

function setTimer(){
    const minutes = Math.floor(secondsElapsed/60);
    const seconds = secondsElapsed % 60
    time.innerHTML= `${padStart(minutes)}:${padStart(seconds)}`
    secondsElapsed++
}

function startTimer(){
    if(interval) resetTimer()
    interval = setInterval(setTimer,1000)
}

function stopTimer(){
    clearInterval(interval)
}

function resetTimer(){
    stopTimer()
    secondsElapsed = 0;
    setTimer()
}

