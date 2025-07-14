
import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import HomePage from "../src/Pages/HomePage.jsx"
import Reseller from "../src/Pages/Reseller.jsx"
import SingleTools from "../src/Pages/SingleTools.jsx"
import ToolsBundle from "../src/Pages/SingleTools.jsx"
import Contact from "../src/Pages/ContactUs.jsx"
import SignIn from './Pages/SignIn.jsx'
import SignUp from './Pages/SignUp.jsx'
import ProtectedRoute from './Pages/ProtectedRoute.jsx'
const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<ProtectedRoute>
        <HomePage/>
      </ProtectedRoute>}/>
      <Route path='/reseller-plans' element={<ProtectedRoute>
        <Reseller/>
      </ProtectedRoute>}/>
      <Route path='/single-tools' element={<ProtectedRoute>
        <SingleTools/>
      </ProtectedRoute>}/>
      <Route path='/tools-bundle' element={<ProtectedRoute>
        <ToolsBundle/>
      </ProtectedRoute>}/>
      <Route path='/contact-us' element={<ProtectedRoute>
        <Contact/>
      </ProtectedRoute>}/>
      <Route path='/signIn' element={<SignIn/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>
    </Routes>
  </Router>
  </>
  )
}

export default App
