// import { useState } from 'react'
import React, { useEffect } from 'react'
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import MainNavBar from './components/MainNavBar'
import axios from 'axios'
import AddRecipeForm from './pages/AddRecipeForm'
import EditRecipeForm from './pages/EditRecipeForm'

const getAllRecipes = async () => {
  let allRecipes = [];

  try {
    const res = await axios.get('/recipe');
    allRecipes = res.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }

  return allRecipes;
};


const router = createBrowserRouter([ 
  {path:"/", element:<MainNavBar/>, children:[
  {index:true, element: <Home />}, //loader: getAllRecipes
  {
    path:"addrecipeform", element: <AddRecipeForm/> // its telling it to show this specific element on pages jsx as per the path
  },
  {
    path:"editrecipeform", element: <EditRecipeForm/>
  }
  ]}
  
])

 function App() {
  useEffect(() => {getAllRecipes()},[])

   return (
     <>
     <RouterProvider router={router}></RouterProvider>
     </>
   )
  }

 export default App