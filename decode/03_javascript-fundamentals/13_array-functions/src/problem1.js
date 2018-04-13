// You are not allowed to use a for loop or a while loops for any of these questions. Instead, use filter, map, etc...



function removeEvens(lst) {
    // lst is an array of numbers
    // Returns a new list with all the even numbers of lst removed
    return lst.filter(n => {
        if (n % 2 === 0) {
            return false
        }
        if (n % 2 === 1) {
            return true
        }
    })
}



function keepLong(lst) {
    // lst is an array of strings
    // Returns a new list with all the elements of lst that are length greater than 5
    return lst.filter(n => {
        if (n.length > 5) {
            return n;
        }

    })
}

function greet(lst) {
    // lst is an array of strings
    // Adds "Hello " to every element of greet
    // For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]

    return lst.map(x => "Hello " + x);
}

function greetLong(lst) {
    // lst is an array of strings
    // Only greet people who's names have length at least 4.
    // Otherwise ignore them completely.
    // For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
    function keepLong(lst) {

        return lst.filter(n => {
            if (n.length > 4) {
                return n;
            }
        })
    }

    newLst = keepLong(lst)
    greetLst = newLst.map(x => "Hello " + x);
    return greetLst;
}

function allLong(lst) {
    // lst is an array of strings
    // Returns true if every element of lst is of length at least 5. Otherwise returns false.
    return lst.every(n => {
        return n.length >= 5;
    })
}

module.exports = {
    removeEvens,
    keepLong,
    greet,
    greetLong,
    allLong
};