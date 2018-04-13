var root = document.getElementById("root");
var hasWon = false;
var statusElement = document.getElementById("statusElement");
var c = function() {
   
    if (!hasWon) statusElement.innerText = "You won!";
    hasWon = true;
}

var v = 3000;

root.addEventListener("click", c);


setTimeout(function(){ 
    if (hasWon) { 
        return; 
    } else { 
    
        statusElement.innerText = "you lost";
        
        root.removeEventListener("click", c);
    }
    }, v);


    







