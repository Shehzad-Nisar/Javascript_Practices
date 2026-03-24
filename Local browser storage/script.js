const data = document.querySelector("#data");
const getData = document.querySelector("#getData");



localStorage.setItem("name","shehzad nisar");
const name = localStorage.getItem("name");

// for an array: 
let todos = [
    {id:1, text: 'hello from one', day: 'friday'},
    {id:2, text: 'hello from two', day: 'saturday'},
    {id:3, text: 'hello from three', day: 'sunday'}
]


localStorage.setItem("data", JSON.stringify(todos));

const arraydata = localStorage.getItem('data');
data.style.color = 'white';
data.innerText = arraydata;

const getitem = localStorage.getItem("data")

getData.innerText = getitem;
getData.style.color = "white"

//-------------------------------------------------------------//



