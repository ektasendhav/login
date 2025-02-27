import React from 'react'
import { Link } from "react-router-dom";
import "../assets/navbar.css"
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
        <a className="navbar-brand" href="/">
          VaxTrack
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home 
              </Link>
            </li>
          
            
            
            <li class="nav-item">
              <Link class="nav-link" to="/Signup">
              Signup
              </Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link" to="/Login">
              Login
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  )
}



