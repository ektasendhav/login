import React from 'react'
import "../assets/Signup.css"


export const Signup = () => {
  return (
    <div>
         <div className='login-container'>
      <h2 className="form-title">Sign up with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src="google.svg" alt="Google" className="social-icon" />
          Google
        </button>
        <button className="social-button">
          <img src="apple.svg" alt="apple" className="social-icon" />
          Apple
        </button>
      </div>

        
      <div className="separator"><span></span><p>or</p><span></span></div>

      <form action='#' className='login-form'>
      <div className="input-wrapper">
        <input type="Name" placeholder='Name' className="input-field" required />
        <div className="icone3">
        <i class="fa-solid fa-user"></i></div>
      </div>
      <div className="input-wrapper">
        <input type="email" placeholder='Email address' className="input-field" required />
        <div className="icone">
        <i class="fa-solid fa-envelope"></i></div>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder='Password' className="input-field" required />
        <div className="icone2">
        <i class="fa-solid fa-lock"></i></div>
      </div>
      <a href="#" className='forget-pass-link'>Forget Password?</a>
      <button className='login-button'>Sign up</button>
      </form>

      <p className='signup-text'>Alrady have an account? <a href="#">Login</a></p>
    </div>
    </div>
  )
}
