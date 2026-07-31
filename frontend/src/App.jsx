import React from 'react'
import Navbar from './components/navbar'
import Middle from './components/Middle'
import Lastbutton from './components/Lastbutton'
const App = () => {
  return (
    <div className='container'>
       <div className="main-container">

        <div className='nav-container'>
            <Navbar/>
        </div>

        <div className="middle-container">
            <Middle/>
        <div>
            <div className="last-container">
                <div className="footer">
                       <p>
                        © 2026 AI Job Search Platform | Built by
                        <strong> Aniket Underiya</strong>
                    </p>
                </div>
            </div>
         </div>
        </div>
       </div>

    </div>
  )
}

export default App