import React from 'react'
import Navbar from './Navbar'
import { Outlet } from "react-router-dom";
import Footer from './Footer'
import About from './About';

function MainNavBar() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <About/> 
    </>
  )
}

export default MainNavBar
