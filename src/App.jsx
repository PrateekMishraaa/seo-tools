
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "../src/Pages/HomePage.jsx"
import Reseller from "../src/Pages/Reseller.jsx"
import SingleTools from "../src/Pages/SingleTools.jsx"
import ToolsBundle from "../src/Pages/SingleTools.jsx"
import Contact from "../src/Pages/ContactUs.jsx"
const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/reseller-plans' element={<Reseller/>}/>
      <Route path='/single-tools' element={<SingleTools/>}/>
      <Route path='/tools-bundle' element={<ToolsBundle/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App
