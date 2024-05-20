import React from 'react'
import { Outlet } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'

// Hacer un modo oscuro / claro

const Header = () => {
  return (
    <div className="header-outlet">

    <div className='header-container'>
      <div className="header-logo">
        <img src={logo} alt="" />
      </div>
      <div className="header">
      {/* <h1>Header</h1> */}

      </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Header