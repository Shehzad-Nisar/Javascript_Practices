const todos = [
  {id:1,msg:"original todo 1",completed: false},
  {id:2,msg:"original todo 2",completed: true},
  {id:3,msg:"original todo 3",completed: false},
  {id:4,msg:"original todo 4",completed: true}
]


const updateTodo = (id,todo)=>{
  const newarray = todos.map((eachTodo)=>eachTodo.id===id?{...eachTodo,...todo}:eachTodo);
  return newarray;
}

const var1 = updateTodo(2,{msg:"updated todo 2", completed: false});
console.log(var1)

