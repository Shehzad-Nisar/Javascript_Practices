const body = document.querySelector("body");

const pic = document.querySelector("#pic");

pic.addEventListener("click",(e)=>{
    console.log("click on pic");
    e.stopPropagation(e);
    
},true)

document.querySelector("#div").addEventListener("click",(e)=>{
    console.log("inside div");

    
})