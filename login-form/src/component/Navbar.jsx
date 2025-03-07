import React from 'react'
import { Link } from "react-router-dom";
import "../assets/navbar.css"
export const Navbar = () => {
  return (
    <div>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><img src='nav1.png'></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="home">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="./Login.jsx">Service <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="./Login.jsx">Certificate <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="./Login.jsx">Login <span className="sr-only">(current)</span></a>
      </li>
    </ul>
    <div className="nav-buttons">
        <Link button className="button1" to="Login" type="submit">Login</Link>

      <Link button className="button2 " to="Signup" type="submit">Signup</Link>  
      </div>
      </div>
</nav>
</div>
    </div>
  )
}



