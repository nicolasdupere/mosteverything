var assert = require('assert');

// we need 5 test cases. 
let inputs = [
  [2, 7],
  [2, 6],
  [5, 2],
  [2, 2],
  [6, 8]
]

let outputs = [
  14, 12, 10, 4, 48
]

/*
Make this function return the product of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) {
  if (typeof arr[0] !== "number" || typeof arr[1] !== "number" ) {
    console.log(undefined);
  } 
  console.log("Nombre", arr);
  const add = (a, b) => a * b
  const sum = arr.reduce(add);
  return sum;
}

function runTest(i) {
    // if(i > inputs.length) throw new Error("You do not have enough test cases");
    
    var expected = outputs[i];
    var actual = f(inputs[i]);
    console.log("Total", actual);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
console.log("Test passed");

