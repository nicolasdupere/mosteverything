var assert = require('assert');

// we need 8 test cases. I've provided the first 2
let inputs = [
  ["bonjour", 4],
  ["sssss", 2],
  ["patate", 2],
  ["baleine", 3],
  ["martin", 1],
  ["poutine", 6],
  ["kiki", 1],
  ["pizza", 3],
]

let outputs = [
  "o", "s", "t", "e", "a", "e", "i", "z"
]

/*
Make this function return the letter at the specified position in the string. If no such letter exists, it should return undefined.
For example:
f(["hello", 1]); // e
f(["", 4]); // undefined
f(["abc", 0]); // a
*/
function f(arr, arr2) { 
  if (arr === "") {
    console.log(undefined);
  }
  var res = arr.charAt(arr2)
    //console.log("arr", res);
    return res;
    
}

function runTest(i) {
    var expected = outputs[i];
    //console.log(expected);
    
    var input = inputs[i];
    console.log(input);

    var actual = f(input[0], input[1]);
    console.log("Letter", actual);
    
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);
runTest(7);
console.log("Test passed");
