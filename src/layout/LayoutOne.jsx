import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Footer from '../components/Footer'
import { Outlet } from 'react-router'

const LayoutOne = () => {
  return (
    <>
    
    
    <Navbar />
    <Outlet />
    <Footer />
    
    
    
    </>
  )
}

export default LayoutOne