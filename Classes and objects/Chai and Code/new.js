let array = ['karachi','lahore'];

let cities = {
    karachi : 'sindh',
    lahore : 'punjabi'
}


// access global object and inject method as country so every object get that method;
Object.prototype.country = function () {
    console.log('hellow from an object:');
    
}
// creating a method inside an array ;

Array.prototype.kyaBat = function(){
    console.log("hello from inside the array")
}

// array.kyaBat();


// lets try it for string

let name = 'shehzadNisar       ';

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length of string is ${this.trim().length}`)
}

name.trueLength();

"hussnain".trueLength()