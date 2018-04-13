//var root = document.getElementById("root");
var hasWon = false;
var statusElement = document.getElementById("statusElement");
var preStartTime = Math.floor(Math.random() * 2000) + 1000;
var youWon = function () {
    if (hasWon === false) statusElement.innerText = "You won!";
    hasWon = true;
}

setTimeout(function () {

    document.getElementById("statusElement").innerHTML = '<span style="color: red; border: 2px solid red; padding:5px;">CLICK QUICKLY ON ME</span>';
    //document.getElementById("statusElement").style = "color : red;";

    statusElement.addEventListener("click", youWon);
    document.body.onkeydown = function(e){
        if(e.keyCode == 32){ youWon();
        }
    }

    setTimeout(function () {
        if (hasWon) {
            return;
        } else {
            statusElement.innerText = "YOU LOST!!!";
            statusElement.removeEventListener("click", youWon);
        }
    }, 2500);

}, preStartTime);