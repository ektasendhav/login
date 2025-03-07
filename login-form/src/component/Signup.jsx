import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/Signup.css";

export const Signup = () => {
  // React Hook Form setup
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Navigation and location hooks
  const navigate = useNavigate();
 

  // User state (if you need to manage logged in user data)
  const [user, setUser] = useState(null);

  // Allowed pages (example, used for conditional rendering of navbar, etc.)
  const allowedPages = ["/Home", "/Login", "/Signup"];

  // Load user info from localStorage on mount and on change
  useEffect(() => {
    const loadUser = () => {
      const storedUser = JSON.parse(localStorage.getItem("user1"));
      setUser(storedUser);
    };

    loadUser();
    window.addEventListener("storage", loadUser);
    return () => window.removeEventListener("storage", loadUser);
  }, []);

  // Validation schema for form fields
  const validationSchema = {
    nameValidator: {
      required: { value: true, message: "Name is required." }
    },
    emailValidator: {
      required: { value: true, message: "Email is required." }
    },
    passwordValidator: {
      required: { value: true, message: "Password is required." }
    },
    genderValidator: {
      required: { value: true, message: "Gender is required." }
    },
    roleValidator: {
      required: { value: true, message: "Role is required." }
    },
    contactValidator: {
      required: { value: true, message: "Contact is required." },
      pattern: {
        value: /^[6-9][0-9]{9}$/,
        message: "Contact number is not valid."
      }
    }
  };

  // Inline error styles
  const styles = {
    errorText: {
      color: "red",
      fontSize: "14px",
      marginTop: "5px"
    }
  };

  // Form submission handler
  const submitHandler = async (data) => {
    console.log(data);

    const res = await axios.post("/user",data)
    console.log(res.data)
    console.log(data)
setTimeout(() => {
    navigate("/login")
}, 2000);

    // try {
    //   const res = await axios.post("/user", data);
    //   if (res.status === 201) {
    //     alert("User added successfully.");
    //     // Optionally, navigate to another page after signup:
    //     navigate("/login");
    //   }
    // } catch (error) {
    //   console.error(error);
    //   toast.error("Error adding user!", { position: "top-right", autoClose: 2000 });
    // }
  };

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
            <img src="apple.svg" alt="Apple" className="social-icon" />
            Apple
          </button>
        </div>

        <div className="separator">
          <span></span>
          <p>or</p>
          <span></span>
        </div>

        <form className='login-form' onSubmit={handleSubmit(submitHandler)}>
          {/* Name Input */}
          <div className="input-wrapper">
            <input
              type="text"
              placeholder='Name'
              className="input-field"
              {...register("firstName", validationSchema.nameValidator)}
              required
            />
            <div className="icone1">
              <i className="fa-solid fa-user"></i>
            </div>
            {errors.name && <p style={styles.errorText}>{errors.name.message}</p>}
          </div>

          {/* Email Input */}
          <div className="input-wrapper">
            <input
              type="email"
              placeholder='Email address'
              className="input-field"
              {...register("email", validationSchema.emailValidator)}
              required
            />
            <div className="icone2">
              <i className="fa-solid fa-envelope"></i>
            </div>
            {errors.email && <p style={styles.errorText}>{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className="input-wrapper">
            <input
              type="password"
              placeholder='Password'
              className="input-field"
              {...register("password", validationSchema.passwordValidator)}
              required
            />
            <div className="icone3">
              <i className="fa-solid fa-lock"></i>
            </div>
            {errors.password && <p style={styles.errorText}>{errors.password.message}</p>}
          </div>

          {/* Contact Input */}
          <div className="input-wrapper">
            <input
              type="number"
              placeholder='Contact'
              className="input-field"
              {...register("contact", validationSchema.contactValidator)}
              required
            />
            <div className="icone4">
              <i className="fa-solid fa-phone"></i>
            </div>
            {errors.contact && <p style={styles.errorText}>{errors.contact.message}</p>}
          </div>

          {/* Dropdown for Gender */}
          <div className="input-wrapper">
            <select
              name="gender"
              className="input-field"
              {...register("gender", validationSchema.genderValidator)}
              required
            >
              <option value="" disabled selected>Gender</option>
              <option className="option1" value="Male">Male</option>
              <option className="option1" value="Female">Female</option>
            </select>
            {errors.gender && <p style={styles.errorText}>{errors.gender.message}</p>}
          </div>

          {/* Dropdown for Role */}
          <div className="input-wrapper">
            <select
              name="role"
              className="input-field"
              {...register("role", validationSchema.roleValidator)}
              required
            >
              <option value="" disabled selected>Select Role</option>
              <option className="option1" value="patient">Patient</option>
              <option className="option1" value="doctor">Doctor</option>
              <option className="option1" value="admin">Admin</option>
            </select>
            {errors.role && <p style={styles.errorText}>{errors.role.message}</p>}
          </div>

          <a href="#" className='forget-pass-link'>Forget Password?</a>
          <button className='login-button' type="submit">Sign up</button>
        </form>

        <p className='signup-text'>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};
