import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import ResumeAnalyzer from './pages/ResumeAnalyzer';
import Jobsearch from './pages/Jobsearch';
import About from './pages/About';
import Dashbord from './pages/Dashbord';


const App = () => {
  return (
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/resume' element={<ResumeAnalyzer/>}/>
<Route path='/job-search' element={<Jobsearch/>}/>
<Route path='/about' element={<About/>}/>

<Route path='/dashboard' element={<Dashbord/>}/>

</Routes>
  )
}

export default App;