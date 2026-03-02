// Light mode button
let btn = document.querySelector("#btn");
let body = document.querySelector("body");

btn.onclick = (e) => {
    console.log(e); // full event object
    console.log(e.type); // click
    console.log(e.target); // button element
    console.log(e.clientX, e.clientY); // mouse position
    console.log("Light mode activated!");
    body.style.backgroundColor = "white";
    body.style.color = '#212121';
}

// Dark mode button
let btn2 = document.querySelector("#dark");

btn2.onclick = () => {
    console.log("Dark mode activated!");
    body.style.backgroundColor = "#212121";
    body.style.color = 'white';
}

// Input field events
let inputt = document.querySelector("input");

inputt.addEventListener('keydown', function(e){
    console.log('keydown:', e.key);
});

inputt.addEventListener('keyup', function(e){
    console.log('keyup:', e.key);
});

// Div hover events
let div = document.querySelector(".div");

div.onmouseover = (e)=>{
  console.log(e)

}