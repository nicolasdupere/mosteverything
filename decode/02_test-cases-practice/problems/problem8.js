var assert = require('assert');

// we need 5 test cases. 
let inputs = [
["hello"],
["bonjour"],
["allo les amis"],
["forrest gum"],
["patate frite"] 
]

let outputs = [
  "olleh", "ruojnob", "sima sel olla", "mug tserrof", "etirf etatap"
]

/*
Make this function return the input string, reversed. For example "hello" would return "olleh" and "how are you" would return "uoy era woh".
You must use a for loop for this exercise.
*/
function f(str) {

    console.log("inputs", str);
    str2 = str.toString();
    var newString = "";
    for (var i = str2.length - 1; i >= 0; i--) {
            newString = newString + str2[i];
        }
    return newString;

}

function runTest(i) {
    if(i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    console.log("outputs", expected);
    
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log("test cases passed");
