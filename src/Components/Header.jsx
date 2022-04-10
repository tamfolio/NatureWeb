import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <div className="logo-box">
          <img src="/images/logo-white.png" alt="Logo" className='logo'/>
        </div>
    <div className="text-box">
    <h1 className="primary-header">
          <span className="main-primary">Outdoors</span>
          <span className="sub-primary">Is where Life Happens</span>
        </h1>

        <a href="/" className='btn btn-white'>Discover Our Tour</a>
    </div>
        
    </header>
  )
}

export default Header