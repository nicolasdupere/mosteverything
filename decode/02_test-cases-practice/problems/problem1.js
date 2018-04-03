var assert = require('assert');

// we need 5 test cases. I provided 1 input
let inputs = [
  "amande",
  "banane",
  "",
  "doudou",
  "etienne",
]

let outputs = [
  "a",
  "b",
  undefined,
  "d",
  "e",
]

// Make this function return the first letter of the string that is passed to it. If the string does not have a first letter, return undefined
function f(str) {
    console.log("First letter of", str);
    str = str[0];
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
