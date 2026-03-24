let todos = [
    {id:1,text:"first task is coding",toggle: false},
    {id:2,text:"Second task is execrising",toggle: false},
    {id:3,text:"Third task is execrising",toggle: false},
     

]

// const updateToDo=(ID,todo)=>{
//   const newarray = (todos.map((prevobj)=>prevobj.id === ID ? todo: prevobj))
//   console.log('before:',todos)
//   todos = newarray;
  
//   console.log('after',newarray)
// }

// updateToDo(2, {id:2,text:"New object is inserted",toggle: true})

// toggle to do 
const toggleTodo=(id)=>{
  const newarray = (todos.map((prevobj)=> prevobj.id === id ? {...prevobj, toggle: !prevobj.toggle} : prevobj))
  todos = newarray; 

}

toggleTodo(3);
console.log(todos)


