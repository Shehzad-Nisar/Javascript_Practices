
// const student = {
//     name: "shehzad Nisar",
//     class : "Bscs",
//     age : 22,
//     year : "3rd",


//     performance(){
//        return this;
//     }
// }

// console.log(student.performance());

function getDetailed(name,grade , marks){
    this.name = name;
    this.grade = grade;
    this.marks = marks;
    return this; }

let st1 = new getDetailed("shehzadnisar", 16, 333);
let st2 =  new getDetailed("ZiarafHussain", 14, 433);
console.log(st1);
console.log(st2);