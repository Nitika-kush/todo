import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = ({task,deleteTodo,toggleComplete,editTodo}) => {
  return (
    <div className='Todo'>
      {/* class ki dymanic csss kaise pass karte hai */}
      <p className={`${task.completed ?"completed":"incompleted"}`} onClick={()=>toggleComplete(task.id)}>{task.task}</p>
     <div  >
     <FaEdit className='edit-btn' onClick={()=>editTodo(task.id)}/>
      <MdDelete className='delete-btn' onClick={()=>deleteTodo(task.id)}/>
     </div>
    </div>
  )
}

export default Todo