import { createSlice} from "@reduxjs/toolkit";

const initialState ={
    todos:["car","bat","train","bus"]
}

export const todoSlice =createSlice({
    name: "TodolistSlice",
    initialState,
    reducers:{
    addTodo:(state,action)=>{
        state.todos.push(action.payload)
    }
 }
})
export const {addTodo} = todoSlice.actions;
const todoReducer = todoSlice.reducer
export default todoReducer