

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
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

window.onload = function () {
    var mintues = 25;
    var seconds = 00;
    var time = 60 * 25;

    display = document.querySelector('.timer');
    display.textContent = "25:00";
    document.getElementById("pm-btn").style.backgroundColor = "#6EA11A";

    
    //Handle button color on click
    document.getElementById("pm-btn").onclick = function(){
        display.textContent = "25:00";
        var primaryColor = "#6EA11A";
        var secondaryColor = "#8BC22F";
        changeColor(primaryColor, secondaryColor);
        document.getElementById("pm-btn").style.backgroundColor = "#6EA11A";
    }

    document.getElementById("sb-btn").onclick = function(){
        display.textContent = "05:00";
        var primaryColor = "rgb(76 145 149)";
        var secondaryColor = "rgb(94 156 160)";
        changeColor(primaryColor, secondaryColor);
        document.getElementById("sb-btn").style.backgroundColor = "rgb(76 145 149)";
    }
    
    document.getElementById("lb-btn").onclick = function(){
        display.textContent = "15:00";
        var primaryColor = "rgb(69 124 163)";
        var secondaryColor = "rgb(88 137 172)";
        changeColor(primaryColor, secondaryColor);
        document.getElementById("lb-btn").style.backgroundColor = "rgb(69 124 163)";
    }

    document.getElementById("start-btn").onclick = function(){
        startTimer(time, display);
    }
};