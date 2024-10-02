// // import logo from './logo.svg';
// // import './App.css';
// // import Todolist from './Todolist';
// // import Counter from './Counter';
// // import store from './folder/Store';
// // import { Provider } from 'react-redux';
// // function App() {
// //  return(
// //     <Provider store={store}>
// //      <div  className="border border-black p-2 m-2">
// //      <h1>india</h1>
// //         <Todolist></Todolist>
// //         <Counter></Counter>
// //      </div>
// //     </Provider>
// //  )
// // }
// // export default App; ;
// import "./App.css";
// import Countries from "./feture/countries/Countries";
// // import Counter from "./feture/counter/Counter";
// // import Todolist from "./feture/todolist/Todolist";
// // import AxiosApi from "./axios/AxiosApi";
// import { Link, Outlet } from "react-router-dom";

// function App() {

//   return (   
//     <div>
//       <h1>India</h1>
     
//      {/* <Counter></Counter>
//    <Todolist></Todolist> */}
//     {/* <AxiosApi></AxiosApi>  */}
//     <Link to ="/counter">Counter</Link>
//     <Link to="/todolist">Todolist</Link>
//     <Link to="/axiosapi">axiosapi</Link>
//     <Link to="/countries">countries</Link>
//     {/* <Countries></Countries> */}
//     <Outlet></Outlet>
//     </div>
//   );
// }
// export default App;

// import React, { useEffect } from 'react'

// function App() {
//   var [c,setC]=React.useState(1)
//  useEffect(()=>{
//   setInterval(()=>{
//     setC(c+1)
//     console.log("SetInterv")
//   },1000)
//  })
//   return (
//     <div>
//       <h1>Counte : {c}</h1>
//     </div>
//   )
// }

// export default App

// import React, { useEffect } from 'react'
// import { useRef } from 'react'
//         function App() {
//           var [c,setC]=React.useState(1)
//           // var [x,setX]=React.useState(100)

//           var trf =  useRef();
//         useEffect(()=>{
//          trf.current = setInterval(()=>{

//         setC((prev)=>{return prev+1})
//         console.log("SetIntervels")
//           },1000) 
//           return ()=>{
//             clearInterval(trf.current);
//           }
         
//         },[])
//         console.log("jjjj")
//         function stopabba(){
//           clearInterval(trf.current)
//         }
//           return (
//             <div className='p-2 m-2 border border-danger'>
//               <h1>Counte : {c}</h1>
//               <button onClick={()=>{stopabba()}} className='btn btn-info m-3 p-3'>Stop....</button>
//               {/* <h1>somthething: {x}</h1> */}
//             </div>
//           )
//         }

//         export default App
import React, { useEffect } from 'react'
import Todolistt from './Todolistt'

function App() {
  var [c,setC]=React.useState(0)
  // setInterval(()=>{
  //   setC(c+1)
  // },1000)
  //  useEffect(()=>{
  //   console.log("App component Render")
  //  })

  return (
    <div className='border border-danger m-3 p-3'>

      <h1>App : {c}</h1>
      <button className='btn btn-danger' onClick={()=>{setC(c+10)}}>Change</button>
      <Todolistt></Todolistt>
      
    </div>
  )
}

export default App