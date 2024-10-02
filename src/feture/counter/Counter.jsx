

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc, dec,reset } from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counterRed.count);
  var dispatch = useDispatch();
  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={() => {dispatch(inc())}}> increment</button>
      <button onClick={() => {dispatch(dec())}}>decrement</button>
      <button onClick={() => {dispatch(reset())}}>reset</button>
      </div>
  );
}
export default Counter;
