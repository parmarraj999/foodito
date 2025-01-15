import React from 'react'
import './nav.css'

function Nav() {
  return (
    <div className="nav-container">
        <div className="logo">
            Foodito
        </div>
        <ul>
            <li>Home</li>
            <li>Foods</li>
            <li>Contact Us</li>
        </ul>
        <div className="nav-button">
            Enter
        </div>
    </div>
  )
}

export default Nav