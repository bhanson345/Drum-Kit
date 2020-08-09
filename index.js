//Detect button pressed

var drumButtons = $(".drum").length;



$(".drum").click(function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimate(buttonInnerHTML);

});



// Detect keyboard press

$().keypress(function (event) {

    makeSound(event.key);
    buttonAnimate(event.key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }

}

function buttonAnimate(currentkey) {

    var activeButton = document.querySelector("." + currentkey)

    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}


// Play drums on button click
$(".play").click(function () {


    setTimeout(firstNote, 90);
    setTimeout(secondNote, 600);
    setTimeout(thirdNote, 1000);
    setTimeout(fourthNote, 1600);
    setTimeout(fifthNote, 2000);
})


//Notes

function firstNote() {
    $(".k").click();
}

function secondNote() {
    $(".j").click();
}

function thirdNote() {
    $(".k").click();
}

function fourthNote() {
    $(".k").click();
}

function fifthNote() {
    $(".j").click();
}