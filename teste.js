class People {
    constructor(nameStudent){
        this.name = nameStudent;
    }

    whoAmI(){
        console.log(this.type);
    }
}

class Teacher extends People {

    constructor(nameStudent){
        super(nameStudent, "Teacher");
    }

    teach(){
        console.log("1 + 1 = 2");
    }
}

class student extends People {

    constructor(nameStudent){
        this.name = nameStudent;
    }
}

var studentUm = new student("Ronei");

console.log(studentUm.name);


getStudent(junin);
