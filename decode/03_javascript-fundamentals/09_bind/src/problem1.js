var patate = {
    name: "Bob"
};

function greet() {
    return "I'm " + this.name;
}

var greet = greet.bind(patate);
// bind greet to bob

module.exports = greet;