import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Indexpage from '../pages/Indexpage'

const Layout = () => {
  return ( 
    <main>
    <Header/>
    <Outlet/>
    <Footer/>
    </main>
  )
}

export default Layout