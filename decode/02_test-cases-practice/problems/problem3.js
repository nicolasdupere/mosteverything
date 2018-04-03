var assert = require('assert');

// we need 7 test cases. I've provided 2.
let inputs = [
  [2, 4],
  [-3, 3],
  [6, 4],
  [2, 9],
  [5, 7],
  [-2, -4],
  [-2, 4]
]

let outputs = [
  6, 0, 10, 11, 12, -6, 2
]

/*
Make this function return the sum of the two numbers that are passed to it. If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.
*/
function f(arr) { // [2, 4]
  if (typeof arr[0] !== "number" || typeof arr[1] !== "number" ) {
    console.log("Not a number");
  }
  //console.log(typeof arr);
  console.log("Nombre", arr);
  const add = (a, b) => a + b
  const sum = arr.reduce(add);
  return sum;
  
}

function runTest(i) {
    var expected = outputs[i];
    console.log("Expect", expected);
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
console.log("test cases passed");

