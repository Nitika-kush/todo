import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import { EditTodoForm } from './EditTodoForm';

const TodoWrappers = () => {
  const [todos,setTodos]=useState([]);

  //Add Todo
  const addTodo=(todo)=>{
    setTodos([...todos,{id:uuidv4(),task:todo,isEditing:false,completed:false}])
  }
  //delete Todo
  const deleteTodo=(id)=>
   setTodos(todos.filter((todo)=>todo.id!==id))

   //toggle Complete Todo
   const toggleComplete=(id)=>{
    setTodos(
      todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo)
    )
   }

   //edit Todo
   const editTodo=(id)=>{
    setTodos(
      todos.map((todo)=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo)
    )
   }
   //edit task todo
   const editTask=(task,id)=>{
   setTodos(
    todos.map((todo)=>todo.id===id?{...todo,task,isEditing:!todo.isEditing}:todo)
   ) 
   }

console.log("Todos",todos);
  return (
    <div className='TodoWrapper'>
      <h1>ToDo Task</h1>
      <TodoForm addTodo={addTodo}/>
      {/* display todos */}
      {todos.map((todo)=>todo.isEditing?(
        <EditTodoForm editTodo={editTask} task={todo}/>
      ):(
        <Todo
        key={todo.id}
        task={todo}
        deleteTodo={deleteTodo}
       editTodo={editTodo}
        toggleComplete={toggleComplete} 
        />
      ))}
    </div>
  )
}

export default TodoWrappers