import React from 'react'

const App = () => {
  return (
    <div className='container'>
       <div className="main-container">
        
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
              <a href="#">Home</a>
              <a href="#">Resume Analyzer</a>
              <a href="#">AI Job Search</a>
              <a href="#">About</a>
              <a href="#">Dashbord</a>
            </div>
            <div className="sing-up-container">
              <button className='login'>Login</button>
              <button className='sing'>Sing-up</button>
            </div>
          </div>
       </div>

    </div>
  )
}

export default App