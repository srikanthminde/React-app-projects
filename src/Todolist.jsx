// import React from "react"
// import {connect} from "react-redux"
// import Store from "./folder/Store"
// function Todolist(props){
//     return(
//         <div className="border border-black p-2 m-2">
//             <h1>Todolist</h1>
//             <input type="text" id="d1"/>
//             <button onClick={()=>{props.addTodoItem(document.getElementById("d1").value)}}> Add Todo</button>
//            <ul>
//             {
//                 props.todosR.todos.map((p)=>{
//                     return<li>{p}</li>
//                 })
//             }
//            </ul>
//         </div>
//     )
// }
// function mapStateToProps(state){
//     console.log(state)
//     return state
    
// }
// function mapdispatchToProps(dispatch){
//     console.log(dispatch)

//     return  {
//         addTodoItem :(nt)=>{dispatch({type:"ADD_TODO",payload:nt})}
//     }
// }
// export default  connect(mapStateToProps,mapdispatchToProps)(Todolist)