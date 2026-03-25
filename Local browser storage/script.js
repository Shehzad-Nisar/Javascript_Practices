const todos = [
    {id: Date.now(),msg :"data of todo1",completed:true},
    {id: Date.now(),msg :"data of todo2",completed:false},
    {id: Date.now(),msg :"data of todo3",completed:true},
    {id: Date.now(),msg :"data of todo4",completed:false}
]

localStorage.clear()

localStorage.setItem("todosData",JSON.stringify(todos));

const data = JSON.parse(localStorage.getItem("todosData"));

console.log(data);


///

let str = "      ";

const add=()=>{
    if(str.trim()!= ""){
        console.log('yes');
        str= ""
    }else{
        console.log("no")
    }

}

add();
console.log(str)

localStorage.removeItem("todos")