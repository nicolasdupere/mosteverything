class makeTeacher {
    constructor (n) {
        this.name = n; 
        this.hoursTaught = 0;
    }
}

class makeStudent {
    constructor(n, we) {
        this.name = n; 
        this.fundamentalsProficiency = 0;
        this.workEthic = we;
    }
}

class teach {
    constructor(teacher, student) {
        student.fundamentalsProficiency = student.fundamentalsProficiency + 1;
    teacher.hoursTaught = teacher.hoursTaught + 1;
    }
}

class getProficiency {
    constructor(student) {
        return student.fundamentalsProficiency;
    }
}
// function getProficiency(student) {

class dadJoke {
    constructor(teacher) {
        console.log(teacher + " made a funny");
    }
}

class doProject {
    constructor(student) {
        if(student.fundamentalsProficiency < 5) {
            console.log(student.name + " was not ready to take on the project");
        } else {
            console.log(student.name + " successfully completed the project!");
        }
    }
}

class study {
    constructor(student) {
        student.fundamentalsProficiency = student.fundamentalsProficiency + student.workEthic;
    }
}

// function study(student) {
//     student.fundamentalsProficiency = student.fundamentalsProficiency + student.workEthic;
// }

var jack = new makeTeacher("jack");
var bob = new makeStudent("bob", 10);
var susan = new makeStudent("susan", 12);
new teach(jack, bob);
new teach(jack, susan);
new doProject(bob);
new doProject(susan);
new study(bob);
new study(susan);
new doProject(bob);
new doProject(susan);


