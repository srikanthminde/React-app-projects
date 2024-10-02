import React, { useCallback } from 'react'
import Todos from './Todos'
import { useEffect } from 'react'
import { useState,useMemo} from 'react'

function Todolistt() {
    var [newTodo,setNewTodo]=useState('')
    var x = useMemo(()=>{return [10,20]},[]);
    var [todos,SetTodos]=React.useState([
        {
            title:"buy vegitables",
            price:"500"
           },
           
           {
            title:"make toyy ",
            price:"500"
           },
           {
            title:"go to goa",
            price:"500"
           },
           {
            title:" Create App ",
            price:"500"
           },

    ])
     useEffect(()=>{
     console.log("Todolist component Render")
       })
       function addTodo(){
        SetTodos([...todos,{title:newTodo,price:10000}])
        }
    var deleteTodo=useCallback(
    function deleteTodo(ind){
        var temp=JSON.parse(JSON.stringify(todos))
        temp.splice(ind,1)
        SetTodos([...temp])
    }
)
  return (
    <div className='border border-success m-5 p-5 '>
        <h1>Todolist</h1>
        <input type="text"  onChange={(ev)=>{setNewTodo(ev.target.value)}}/> &nbsp;
        <button onClick={addTodo} className='btn btn-success' >Add Todo </button>
        {
            todos.map((todos,i)=>{
                return <Todos todos={todos} deleteTodo={deleteTodo} id={i}  x={x}></Todos>
            })
        }
    </div>
  )
}

export default React.memo( Todolistt)