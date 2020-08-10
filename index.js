var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;


// Start Game
$(document).keypress(function () {
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
    }
});




// Button Click
$(".btn").click(function () {
    var userColor = this.id;
    userClickedPattern.push(userColor);
    playSound(userColor);
    animatePress(userColor);
    checkAnswer(userClickedPattern.length - 1);
});

// Check Answer
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        //console.log("Success");


        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 800);
        }
    } else {
        var wrong = new Audio("sounds/wrong.mp3");
        wrong.play();
        $("body").css("background-color", "red");
        setTimeout(function () {
            $("body").css("background-color", "#011F3F")
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart").css("line-height", "5rem");
        startOver();

    }
}


// Functions

function nextSequence() {
    userClickedPattern = [];
    level++
    $("#level-title").text("Level " + level);
    var randomNumber = (Math.random() * 4 | 0);
    var randomColor = buttonColors[randomNumber];
    gamePattern.push(randomColor);
    $('#' + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomColor);

}

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed")
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 80);
}


function playSound(name) {
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}