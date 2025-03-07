import React from 'react'
import "../assets/Login.css"
import { useForm } from 'react-hook-form'
import axios from 'axios';

export const Login = () => {

  const { register, handleSubmit,formState:{errors} } = useForm();
    const submitHandler = async(data)=>{
        console.log(data)

        const res = await axios.post("https://node5.onrender.com/user/user",data)
        if(res.status==201){
            alert("user added.....")
        }
    }
     // const submitHandler = async(data)=>{
    //     console.log(data)

    //     const res = await axios.post("/user/login",data)
    //     if(res.status==201){
    //         alert("user added.....")
    //     }
    // }
    const validationSchema  ={
    emailValidator:{
      required:{
          value:true,
          message:"email is reuired..."
      }
  },
  passwordValidator:{
      required:{
          value:true,
          message:"password is reuired..."
      }
  },
}
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

      <form action='#' className='login-form'onSubmit={handleSubmit(submitHandler)}>
      <div className="input-wrapper">
        <input type="email" placeholder='Email address' className="input-field" required {...register("email",validationSchema.emailValidator)}/>
        <div className="icone">
        <i class="fa-solid fa-envelope"></i></div>
        <span style={{color:"red"}}>
                    {
                        errors.email?.message
                    }
                </span>
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder='Password' className="input-field" required {...register("password",validationSchema.passwordValidator,{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}/>
        <div className="icone2">
        <i class="fa-solid fa-lock"></i></div>
        <span style={{color:"red"}}>
                    {
                        errors.password?.message
                    }
                </span>
      </div>
      <a href="#" className='forget-pass-link'>Forget Password?</a>
      <button className='login-button'>Log In</button>
      </form>

      <p className='signup-text'>Don&apos;t have an account? <a href="#">Signup now</a></p>
    </div>
    </>
  )
}