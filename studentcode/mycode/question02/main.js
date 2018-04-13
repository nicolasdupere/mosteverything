var root = document.getElementById("root");
var hasWon = false;
var statusElement = document.getElementById("statusElement");
var v = Math.floor(Math.random() * 2000) + 1000;
var c = function () {
    if (!hasWon) statusElement.innerText = "You won!";
    hasWon = true;
}

setTimeout(function () {

    document.getElementById("statusElement").innerHTML = "BEGIN THE GAME";
    document.getElementById("statusElement").style = "color : red;";

    root.addEventListener("click", c);
    document.body.onkeydown = function(e){
        if(e.keyCode == 32){ c();
        }
    }

    setTimeout(function () {
        if (hasWon) {
            return;
        } else {

            statusElement.innerText = "YOU LOST!!!";
            root.removeEventListener("click", c);
        }
    }, 500);
}, v);