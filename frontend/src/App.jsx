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
                <Lastbutton/>
            </div>
         </div>
        </div>
       </div>

    </div>
  )
}

export default App