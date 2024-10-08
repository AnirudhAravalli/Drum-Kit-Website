var n = document.querySelectorAll(".drum").length;

// Add a global keydown event listener
window.addEventListener("keydown", function(event) {
    var inner = event.key;
    var drumElement = document.querySelector("." + inner);

    if (drumElement) {
        drumElement.classList.add("pressed"); 

        setTimeout(function() {
            drumElement.classList.remove("pressed"); 
        }, 100);

        switch (inner) {
            case "w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "a":
                var kick = new Audio("sounds/kickbass.mp3");
                kick.play();
                break;
            case "s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            default:
                console.log(inner);
        }
    }
});
