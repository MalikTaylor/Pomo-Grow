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
    document.getElementById("timer-body").style.backgroundColor = primaryColor;
    document.body.style.backgroundImage = "linear-gradient(#113620 , #213D2C, #264332 )";
}


function displayTime(min, sec){

    min = min < 10 ? "0" + min : min
    sec = sec < 10 ? "0" + sec : sec
    display.textContent = min + ":" + sec

    minutes = min
    seconds = sec

    return (60 * min)
}

window.onload = function () {
    time = 60 * minutes

    display = document.querySelector('.timer')
    displayTime(25, 00)

    var primaryColor = "rgb(45, 69, 54)"
    var secondaryColor = "rgb(54, 85, 66)"

    changeColor(primaryColor, secondaryColor)

    
    $("#pm-btn").css("background-color", primaryColor)
    $(".dropdown-content-btn").css("color", primaryColor)
    //Handle button color on click
    $('.timer-multi-button').on("click", "button" ,function() {
        $(".primary").css("background-color", primaryColor)
        $(".secondary").css("background-color", secondaryColor)
        $(this).css("background-color", primaryColor)
        $("#login-btn").css("color", primaryColor)
        $("#start-btn").css("color", secondaryColor)
        $("#user-btn").css("color", primaryColor)
        $(".dropdown-content-btn").css("color", primaryColor)
    });
    
    $("#profile-btn").hover(function(){
        $(this).css("background-color", secondaryColor)
        $(this).css("color", "white")
    },function(){
            $(this).css("background-color", "white")
            $(this).css("color", primaryColor)
    });

    $("#logout-btn").hover(function(){
        $(this).css("background-color", secondaryColor)
        $(this).css("color", "white")
    },function(){
            $(this).css("background-color", "white")
            $(this).css("color", primaryColor)
    });


    document.getElementById("pm-btn").onclick = function(){
        time = displayTime(25, 00);
        primaryColor = "rgb(45, 69, 54)";
        secondaryColor = "rgb(54, 85, 66)";
        changeColor(primaryColor, secondaryColor);
        document.body.style.backgroundImage = "linear-gradient(#113620 , #213D2C, #264332 )";
    }

    document.getElementById("sb-btn").onclick = function(){
        time = displayTime(5, 00);
        primaryColor = "rgb(76 145 149)";
        secondaryColor = "rgb(94 156 160)";
        changeColor(primaryColor, secondaryColor);
        document.body.style.backgroundImage= "";
    }
    
    document.getElementById("lb-btn").onclick = function(){
        time = displayTime(15, 00);
        primaryColor = "rgb(19, 32, 82)";
        secondaryColor = "rgb(21, 40, 82)";
        changeColor(primaryColor, secondaryColor);
        document.body.style.backgroundImage= "";
    }

    document.querySelector("#start-btn").onclick = function(){
        if($("#start-btn").hasClass("btn-clicked")){
            $("#start-btn").removeClass("btn-clicked");
        }else{
            $("#start-btn").addClass("btn-clicked");
        }
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

function swap(){
    document.getElementById("login-btn").style.visibility = 'hidden';
    document.getElementById("user-btn").style.visibility = 'visible';
}

function dropDown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

