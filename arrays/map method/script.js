const todos = [
  {id:1,msg:"original todo 1",completed: false},
  {id:2,msg:"original todo 2",completed: true},
  {id:3,msg:"original todo 3",completed: false},
  {id:4,msg:"original todo 4",completed: true}
]


//updatedTodo function
const updateTodo = (id,todo)=>{
  const newarray = todos.map((eachTodo)=>eachTodo.id===id?{...eachTodo,...todo}:eachTodo);
  return newarray;
}

const var1 = updateTodo(2,{msg:"updated todo 2"});
console.log(var1)

//deletedTodo function:

const deletedTodo=(id)=>{
  return todos.filter((eachTodo)=>eachTodo.id!=id)
}

const var2= deletedTodo(3);
console.log("after deleted",var2);


//completed function:

const completedTodo=(id)=>{
  return todos.map((eachTodo)=> eachTodo.id===id?{...eachTodo, completed: !eachTodo.completed}: eachTodo)



}

const var3 = completedTodo(1);
console.log(var3);