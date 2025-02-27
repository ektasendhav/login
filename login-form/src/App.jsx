import React from 'react'
import { Footer } from './component/footer'
import { Signup } from './component/Signup'
import { Login } from './component/Login'
import { Navbar } from './component/Navbar'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
    
  <Navbar></Navbar>

    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
    </Routes>

    <Footer></Footer>
    </div>
  )
}

export default App

