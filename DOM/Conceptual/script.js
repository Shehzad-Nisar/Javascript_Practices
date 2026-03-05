//Click “Change H1 Text” → H1 text and color should change.
const title = document.getElementById("main-title");
const titleChange = document.getElementById("change-title");
titleChange.addEventListener('click', ()=>{
    title.innerText = "Hello I'm Shehzad Nisar.";
    title.style.background = 'green';
    title.style.color = 'yellow';
},false)

console.log(title);
window.console.dir(title);


///Click “Change Paragraphs” → All <p> text updates. using class

const pChange = document.getElementById("change-paragraphs");
const high = document.getElementById("highlight")
const para = document.querySelectorAll("p"); // select all paragraphs
let toggleValue = 0;

high.addEventListener('click', () => {
    if (toggleValue === 0) {
       for (let index = 0; index < para.length; index++) {
        para[index].style.color = 'red'; 
       }
       
    toggleValue++; 
    } else{
        for (let index = 0; index < para.length; index++) {
            para[index].style.color = 'black';
            
        }
    toggleValue--; 
    }
},false);

// to change  the text 

pChange.addEventListener('click', ()=>{
    
    for (let index = 0; index < para.length; index++) {
            para[index].innerText = `Updated Line at element no : ${index+1}`;
            
        }

},false)




