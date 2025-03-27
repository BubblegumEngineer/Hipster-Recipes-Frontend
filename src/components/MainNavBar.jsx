import React from 'react'
import Navbar from './Navbar'

function MainNavBar() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/> 
    </>
  )
}

export default MainNavBar
