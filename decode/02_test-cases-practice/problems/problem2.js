var assert = require('assert');

// we need 5 test cases.
let inputs = [
    "amande",
    "babu",
    "",
    "doric",
    "martin",
  ]
  
  let outputs = [
    "e",
    "u",
    "",
    "c",
    "n",
  ]
  

// Make this function return the last letter of the string that is passed to it. If the string does not have a last letter, return undefined
function f(str) {
    console.log("Last letter of", str);
    str = str.slice(-1);
    console.log("Expect", str);
    return str;
}

function runTest(i) {
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
    if (expected === actual) {
      console.log('Bravo')
    } else { 
      console.log("NOPE")
    }
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
