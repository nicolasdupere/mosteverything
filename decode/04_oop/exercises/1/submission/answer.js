// class person {
// 	constructor(n) {
//              this.name = n;
//        }
// }

// function makeDog(n, fdf, b, a) {
//     return {name: n, favouriteDogFood: fdf, breed:n, age: a};
// }

class makeDog {
    constructor(n, fdf, b, a) {
        this.name = n; 
        this.favouriteDogFood = fdf;
        this.breed = b;
        this.age = a;
    }
}

class makeCat {
    constructor(n, fcf, a) {
        this.name = n;
        this.favouriteCatFood = fcf;
        this.age = a;
    }
}

class makePerson {
    constructor(n, pi, ii) {
        this.name = n;
        this.purinaInventory = pi; 
        this.iamsInventory = ii;
    }
}

class dogAnimalSound {
    constructor(dog) {
        if(dog.breed === "labrador") {
            console.log("big woof");
        } else {
            console.log("small woof");
        }    
    }
}

class catAnimalSound {
    constructor(cat) {
        if(cat.age < 2) {
            console.log("meow");
        } else {
            console.log("MEOW");
        }
    }
}

class feedDog {
    constructor(person, dog) {
        if(dog.favouriteDogFood === 'iams') {
            if(person.iamsInventory > 0) {
                person.iamsInventory = person.iamsInventory - 1;
                console.log(dog.name + " has been fed");
            } else {
                console.log("no more iams!");
            }
        } else {
            console.log(person.name + " only has iams. Sorry " + dog.name + "!")
        }
    }
}

class feedCat {
    constructor (person, cat) {
        if(cat.favouriteCatFood === 'purina') {
            if(person.purinaInventory > 0) {
                person.purinaInventory = person.purinaInventory - 1;
                console.log(cat.name + " has been fed");
            } else {
                console.log("no more purina!");
            }
        } else {
            console.log(person.name + " only has purina. Sorry " + cat.name + "!")
        }
    }
}


var fido = new makeDog("fido", "iams", "labrador", 4);
var mittens = new makeCat("mittens", "purina", 3);
var bob = new makePerson("bob", 2, 1);

new catAnimalSound(mittens);
new dogAnimalSound(fido);

new feedCat(bob, mittens);
new feedDog(bob, fido);
new feedCat(bob, mittens);
new feedDog(bob, fido);
new feedCat(bob, mittens);
