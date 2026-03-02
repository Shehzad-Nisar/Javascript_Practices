# does js have classes ?

yes js have classes . This feature was introduced in ECMAScript 2015 specifications. However js is prototyped based language and oops in js is just a synthatic sugar over existing prototype based inheritance mechanism. In the other words , it provides sytaxes for developers coming from oop oriented languages such as java and c++.

## What is oops??

Object-Oriented Programming (OOP) is a programming paradigm — a style or way of writing code — that focuses on objects instead of functions or logic.
Each object represents a real-world entity and combines two main things:

1- Data (Attributes or Properties) → what the object has.

2- Methods (Functions) → what the object can do.

## Why OOP is Important

Makes code modular (divided into parts).

Promotes reusability (reuse existing code easily).

Simplifies maintenance (fix or improve one class without breaking others).

Improves readability and organization of large projects.

## Objects

An object in JavaScript is a container that holds related information (data + actions) about something — making your code organized, reusable, and easy to manage.

## Important parts of oops

-Object literals
 An object literal is a direct and easy way to create an object in JavaScript using {} with key–value pairs.
It’s often used when you need a single object quickly without defining a class.

-Constructor function 
A constructor function in JavaScript is a special type of function used to create and initialize new objects.
By convention, its name starts with a capital letter to distinguish it from normal functions.
 EXAMPLE:
 function getDetailed(name,grade , marks){
    this.name = name;
    this.grade = grade;
    this.marks = marks;
    return this; }

let st1 = new getDetailed("shehzadnisar", 16, 333);
let st2 =  new getDetailed("ZiarafHussain", 14, 433);
console.log(st1);
console.log(st2);

IMPORTANCE OF new KEYWORD IN JS:

-Creates a new object from a constructor function or class.
-Sets this inside the constructor to refer to the new object.
-Automatically returns the new object (no need to manually use return).
-Supports object-oriented programming by allowing multiple independent objects.
-Enables inheritance through prototypes when used with constructor functions or classes.
-Prevents accidental modification of global variables by keeping properties inside the new object.
-Organizes code and makes it cleaner, reusable, and maintainable.


-Classes
-prototypes
-instances(new,this)
-inheritance

## PILLARS OF OOPS

1-Encapsulation

Encapsulation means wrapping data (variables) and methods (functions) that work on that data into a single unit called a class.
It helps protect the internal state of an object by restricting direct access to its data and only allowing modification through specific methods (getters/setters).
This ensures data security, control, and modularity in code.

2-Inheritance

Inheritance allows a child class to acquire properties and methods from a parent class.
It helps in reusing existing code, reducing redundancy, and maintaining a logical relationship between classes.
With inheritance, you can extend or override parent behaviors in child classes, promoting code reuse and flexibility.

3-Polymorphism

Polymorphism means “many forms.”
It allows the same function or method to behave differently based on the object that calls it.
This enables flexibility and dynamic behavior in programs, as objects of different types can respond uniquely to the same method call.
It improves code readability, maintainability, and extensibility.

4-Abstraction
Abstraction means hiding complex internal details and showing only the essential features of an object.
It focuses on what an object does, not how it does it.
This simplifies complex systems by breaking them into smaller, more understandable parts, making the code clean, secure, and easier to use.