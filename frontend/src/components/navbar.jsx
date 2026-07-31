import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <div className="navbar-container">
            <div className="logo-container">
                 <img src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZ298ZW58MHx8MHx8fDA%3D" alt="logo" />

                 <h2>AI Job Search</h2>
            </div>
            {/* hamburger  */}
            <div className="menu-icon">
                                      ☰
            </div>
            <div className="links">
  <Link to="/">Home</Link>
  <Link to="/resume">Resume Analyzer</Link>
  <Link to="/job-search">AI Job Search</Link>
  <Link to="/about">About</Link>
  <Link to="/dashboard">Dashboard</Link>
</div>
            <div className="sing-up-container">
              <button className='login'>Login</button>
              <button className='sing'>Sing-up</button>
            </div>
          </div>
    </div>
  )
}

export default Navbar;