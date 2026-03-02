let btn = document.createElement("button");
btn.style.backgroundColor = "red";
btn.style.color = 'white';


// we use createTextNode approach to add text inside the button

let txt = document.createTextNode("click me");
btn.appendChild(txt);

// insert the button as the first element of the body

document.body.prepend(btn);


//Question no 2 of DOM part 2:

let para = document.querySelector("p");
// para.setAttribute("class","newClass");

// setAttribute property complete overwrites the other class but we have to combine two classes property so need something which can do this task perfectly which will be "classList" . Which mean we cant use setAttribute property to append classes ...::::

//using classList property 

let neww = para.classList;
neww.add("newClass");