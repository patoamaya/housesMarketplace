import React from 'react'
import { Outlet } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-outlet'>
        <Outlet/>

    <div className='footer-container'>
        <div className="footer">

        {/* <h1>Footer</h1> */}
        </div>
    </div>
    </div>
  )
}

export default Footer