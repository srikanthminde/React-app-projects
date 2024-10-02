// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import App from './App';

// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import Counter from "./feture/counter/Counter";
import Todolist from "./feture/todolist/Todolist";
import AxiosApi from "./axios/AxiosApi";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Countries from "./feture/countries/Countries";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router =createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
   children:[
    {
      path:"/counter",
      element:<Counter></Counter>
    },
    {
      path:"/Todolist",
      element:<Todolist></Todolist>
    },

   
   {
      path:"/axiosapi",
      element:<AxiosApi></AxiosApi>
    },
    {
      path:"/countries",
      element:<Countries></Countries>
    }
   ]
  },
  
])
root.render(
  
  <Provider store={store}>
    <RouterProvider router={router}/>
    
  </Provider>
);
