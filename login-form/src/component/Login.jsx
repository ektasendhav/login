import React from 'react'
import "../assets/Login.css"

export const Login = () => {
  return (
    <>
        <div className='login-container'>
      <h2 className="form-title">Log in with</h2>
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
      <button className='login-button'>Log In</button>
      </form>

      <p className='signup-text'>Don&apos;t have an account? <a href="#">Signup now</a></p>
    </div>
    </>
  )
}
