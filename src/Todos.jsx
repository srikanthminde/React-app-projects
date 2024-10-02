import React from 'react'
import { useEffect } from 'react'
function Todos({todos,deleteTodo,id}) {
     useEffect(()=>{
        // console.log("Todos component Render ::",todos.title)
       })
  return (
    <div  className='border border-info m-2 p-2'>
        {todos. title}&nbsp;
        <button  className='btn btn-danger' onClick={()=>{deleteTodo(id)}}>Delete</button>
    </div>
  )
}

export default React.memo(Todos)