import React from 'react'
import { Footer } from './component/footer'
import { Signup } from './component/Signup'
import { Login } from './component/Login'
import { Navbar } from './component/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './component/Home'
import axios from 'axios'
import{useLocation} from 'react-router-dom'
import { useState } from 'react'



// import { useState } from 'react'


const App = () => {

axios.defaults.baseURL = "http://localhost:3000"
// const location = useLocation();

// const showSignup = ["/Home", "/Login", "/Signup"].includes(location.pathname);

  return (
    <div>
    
  <Navbar></Navbar>

    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/home" element={<Home/>}></Route>
    </Routes>

    <Footer></Footer>
    </div>
  )
}

export default App

