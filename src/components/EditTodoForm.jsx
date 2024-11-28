import React, { useState } from 'react'

export const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task)
 //console.log(value);
  const handleSubmit=(e)=>{
    e.preventDefault()
    // console.log("updated")
    editTodo(value,task.id)
    console.log(value)
  }
  return (
    <form onSubmit={handleSubmit} className='TodoForm'>
      <input 
      type="text"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      className='todo-input'
      placeholder='update task'
      />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}
