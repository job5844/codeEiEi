import React from 'react'
import Home from './Home'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='bg-gray-100 rounded-lg shadow-lg m-10 p-5'>
        <Header />
        

        <div>
          <Outlet />
        </div>

        <Home />
        
    </div>
  )
}

export default Layout