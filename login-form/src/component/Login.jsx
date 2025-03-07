import React from 'react'
import "../assets/Login.css"
import { useForm } from 'react-hook-form'
import axios from 'axios';import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';


export const Login = () => {

  const { register, handleSubmit,formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log("Submitting Login Data:", data);
  
    try {
      const response = await axios.post("/users1/login", data);
      console.log("Response from Backend:", response.data);
  
      if (response.status === 200) {
        const userData = response.data?.data;
  
//Store user details in localStorage
        localStorage.setItem("userId", userData._id);                 //used to store userid in local storage 
        localStorage.setItem("userName", userData.Name);      //used to store username in local storage
        // localStorage.setItem("userRole", userData.userType);       //used to store usertype in local storage
  
// Toaster Msg
        toast.success(`Welcome ${userData.Name}!`, {
          position: "top-right",
          autoClose: 3000,
          theme: "colored",
        });
  
// Navigate based on user type
        setTimeout(() => {
            navigate("/Home");
        }, 2000);
      }
    } catch (error) {
      console.error("Login Error:", error);
  
      toast.error(error.response?.data?.message || "Invalid credentials! Please try again.", {
        position: "top-right",
        autoClose: 3000,
        theme: "colored",
      });
    }
  };
  

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
};

const styles = {
  errorText: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
registerBtn: {
  color: "#0072ff",
  cursor: "pointer",
  textDecoration: "underline",
  fontWeight: "bold",
},
};
  return (
    <>
    <ToastContainer />
        <div className='login-container' >
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

      <form action='#' className='login-form'onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <input type="email" placeholder='Email address' className="input-field" required {...register("email",validationSchema.emailValidator)}/>
        <div className="icone">
        <i class="fa-solid fa-envelope"></i></div>
        {errors.email && <p style={styles.errorText}>{errors.email.message}</p>}
        {/* <span style={{color:"red"}}>
                    {
                        errors.email?.message
                    }
                </span> */}
      </div>
      <div className="input-wrapper">
        <input type="password" placeholder='Password' className="input-field" required {...register("password",validationSchema.passwordValidator,{
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}/>
        <div className="icone2">
        <i class="fa-solid fa-lock"></i></div>
        {/* <span style={{color:"red"}}>
                    {
                        errors.password?.message
                    }
                </span> */}
                {errors.password && <p style={styles.errorText}>{errors.password.message}</p>}
      </div>
      <a href="#" className='forget-pass-link'>Forget Password?</a>
      <button className='login-button'>Log In</button>
      </form>

      <p className='signup-text'>Don&apos;t have an account? <span onClick={() => navigate("/signup")} style={styles.registerBtn}>
            Signup now
          </span></p>
    </div>
    </>
  )
}