
// import React from "react"
// import { connect } from "react-redux"
// function Counter(props){
//   return(
//     <div className="border border-danger p-2 m-2">
//       <h2>Counter:{props.count}</h2>
//       <button onClick={()=>{props.increment()}}>increment</button>
//       <button onClick={()=>{props.decrement()}}>decrement</button>
//     </div>
//   )
// } 
// function mapStateToProps(state){
//   return state.countR
// }
// function mapDispatchToProps(dispatch){
//   return {
//     increment:()=>{dispatch({type:"INC"})},
//     decrement:()=>{dispatch({type:"DEC"})}
//   }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)