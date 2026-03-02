// window.console.dir(document.getElementById("box1"));
// window.console.dir(document.getElementsByClassName("one"));
// window.console.dir(document.getElementsByTagName("p"));

// //Now are working with Query selectors.
// let singleElement = document.querySelector(".one");
// console.dir(singleElement);//always returns only the first matching element of the selector you give.

// let eachElement = document.querySelectorAll("p");
// console.dir(eachElement); //Returns a NodeList of all matching elements (you can loop over them).

// let button = document.querySelector("#button");
// console.log(button.tagName);


// // innertext and HTML properties of DOM:

// let section = document.getElementById("101");
// // section.innerText = "shehzad nisar ";
// // section.innerHTML = "<h1> HELLO GUYS </h1>";

// // innertext property
// console.dir(section.innerText);
// console.dir(section.innerHTML);
// console.dir(section.textContent);

// // textContent property


// let h2 = document.querySelector("h2");
// h2.innerText= h2.innerText + "from shehzad nisar."; //using concatenation concept 
// console.dir(h2.innerText);


// let divs = document.getElementsByClassName("one");

// for (let i = 0; i<3; i++){
//     divs[i].innerText = `div no ${i+1} .`;
//     console.dir(divs[i].innerText);
// }

let body = document.querySelector("body");
let mode = "light mode";

let chngMode = document.querySelector("#button");
chngMode.addEventListener('click' , (e)=>{
    if(mode === "light mode"){
        mode = 'dark mode';
    }else{
        mode = 'light';
    }
})
console.log(mode);