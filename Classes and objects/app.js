class student {
    constructor(rollNo, grade , marks , year){
        console.log("when an object is creating:")
        this.rollNo = rollNo;
        this.grade = grade;  
        this.marks = marks; 
        this.year = year;
        
    }

    showInfo(){
        console.log(`Roll no : ${this.rollNo} has the marks of ${this.marks} in grade ${this.grade} in ${this.year}.`);
        
}
}

let shehzadNisar = new student(22182, "12th" , 951, 2022);

shehzadNisar.showInfo();

let ZiarafHussain = new student(22183, "12th" , 970, 2022);
ZiarafHussain.showInfo();


// Inheritance concepts ::

class teacher {
    constructor(name ,grade, branch){
        this.name = name;
        this.grade = grade ; 
        this.branch = branch ; 
       
    }

}


class oops extends teacher {
    constructor(name,grade,branch){
        super(name,grade,branch);
        console.log(`Sir ${this.name} is the teacher of ${this.grade} at ${this.branch} branch.`)
    }
}

let t1 = new oops("Mukesh Kumar", "ICS-II", "Gulshan E Iqbal");



// practice question:

class user {
    constructor(name , gmail){
        this.name = name ;
        this.gmail = gmail ; 
    }

    viewData(){
        console.log(`The user as named ${this.name} has the gmail account at ${this.gmail}`)
    }
}

class admin extends user {
    constructor(name , gmail){
        super(name,gmail);
    }
    edit(){
        console.log("Edited data by an admin!!!")
       
    }
}

// Error handling in js
let a = 3; 
let b = 5; 
console.log('a= ', a);
console.log("b= ", b);
console.log('a+b= ', a+b);
try{
    console.log("a-b= ", a-d); //error wali line hai yay

}catch(err){
    console.log(err);
}

console.log('a= ', a);
console.log("b= ", b);
console.log('a+b= ', a+b);
console.log("a-b= ", a-b);

