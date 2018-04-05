var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["allo", 2],
    ["bonjour", 2],
    ["bonsoir", 3],
    ["aloha", 4],
    ["nuit", -1],
    ["soleil", 2],
    ["foo", 3]
]

let outputs = [
  "alloallo", "bonjourbonjour", "bonsoirbonsoirbonsoir", "alohaalohaalohaaloha", "", "soleilsoleil", "foofoofoo" 
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.
For example:
f(["foo", 3]) // "foofoofoo"
f(["fo", 3]) // "fofofo"
f(["foo", -1]) // undefined
*/
function f(arr) {
    console.log("inputs",arr);
    if (arr[1] < 1) {
        return "";
    }
     arr1 = arr[0];
     arr2 = arr[1];
     return arr1.repeat(arr2);
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
runTest(5);
runTest(6);

console.log("test cases passed");