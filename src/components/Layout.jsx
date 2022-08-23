import React from 'react'
import Navbar from './Navbar'
import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <h1>Wellcome to React Router Demo</h1>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout