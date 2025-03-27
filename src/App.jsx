// import { useState } from 'react'
import React from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavBar from './components/MainNavBar'
import axios from 'axios'

const getAllRecipes=async()=>{
  let allRecipes=[]
  await axios.get('http://localhost:3000/recipe').then(res=> {
    allRecipes=res.data
  })
  return allRecipes

}

const router = createBrowserRouter([
  {path:"/", element:<MainNavBar/>, children:[
    {path:"/", element:<Home/>, loader: getAllRecipes}
  ]}
  
])

 function App() {

   return (
     <>
     <RouterProvider router={router}></RouterProvider>
     </>
   )
  }

 export default App

   //       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>

//   )
// }


