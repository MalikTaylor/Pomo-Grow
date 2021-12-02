
var timerOn = false;
var interval = null;
var minutes = 25;
var seconds;
var timer; 


function playTimerSound(){
    document.getElementById("timer-alarm-sound").currentTime = 9;
    document.getElementById("timer-alarm-sound").play();
}

function startTimer(duration, display) {
    timer = duration, minutes, seconds;
    if(timerOn){
        interval = setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            displayTime(minutes, seconds);
            
            if(timer == 0){
                playTimerSound();
                clearInterval(interval);

            }
            if(--timer < 0){
                Stop();
                time = displayTime(25, 00);
            }

        }, 1000);
    }
}

function changeColor(primaryColor, secondaryColor){

    var primaryColoredElements = document.getElementsByClassName("primary");
    var secondaryColoredElements = document.getElementsByClassName("secondary");

    for(var i = 0; i < primaryColoredElements.length; i++){
        primaryColoredElements[i].style.backgroundColor = primaryColor;
    }
    for(var i = 0; i < secondaryColoredElements.length; i++){
        secondaryColoredElements[i].style.backgroundColor = secondaryColor;
    }
    document.getElementById("login-btn").style.color = primaryColor;
    document.getElementById("start-btn").style.color = primaryColor;
}

function displayTime(min, sec){

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    display.textContent = min + ":" + sec;

    minutes = min;
    seconds = sec;

    return (60 * min);
}

window.onload = function () {
    time = 60 * minutes;

    display = document.querySelector('.timer');
    displayTime(25, 00);
    document.getElementById("pm-btn").style.backgroundColor = "#6EA11A";
    

    //Handle button color on click
    document.getElementById("pm-btn").onclick = function(){
        time = displayTime(25, 00);
        var primaryColor = "#6EA11A";
        var secondaryColor = "#8BC22F";
        changeColor(primaryColor, secondaryColor);
        document.getElementById("pm-btn").style.backgroundColor = "#6EA11A";
    }

    document.getElementById("sb-btn").onclick = function(){
        time = displayTime(5, 00);
        var primaryColor = "rgb(76 145 149)";
        var secondaryColor = "rgb(94 156 160)";
        changeColor(primaryColor, secondaryColor);
        document.getElementById("sb-btn").style.backgroundColor = "rgb(76 145 149)";
    }
    
    document.getElementById("lb-btn").onclick = function(){
        time = displayTime(15, 00);
        
        var primaryColor = "rgb(69 124 163)";
        var secondaryColor = "rgb(88 137 172)";
        changeColor(primaryColor, secondaryColor);
        document.getElementById("lb-btn").style.backgroundColor = "rgb(69 124 163)";
    }

    

    document.querySelector("#start-btn").onclick = function(){
        if(timerOn == false){
            timerOn = true;
            document.querySelector("#start-btn").addEventListener("click", Start(time, display));  
        }else{
            console.log(minutes + ':' + seconds);
            time = timer;
            console.log("Time: ", timer);   
        }
    } 
};

function Start(time, display){
    console.log("Started");
    document.querySelector("#start-btn").removeEventListener("click", Start);
    document.querySelector("#start-btn").addEventListener("click", Stop)
    document.getElementById("start-btn").textContent = "Stop";
    timerOn = true;
    startTimer(time, display);
}

function Stop(time, display){
    console.log("Stopped");
    document.querySelector("#start-btn").removeEventListener("click", Start);
    document.querySelector("#start-btn").removeEventListener("click", Stop);
    document.querySelector("#start-btn").textContent = "Start";
    timerOn = false;
    clearInterval(interval);
}

