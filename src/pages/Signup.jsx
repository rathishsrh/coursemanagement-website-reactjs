import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import {v4 as randomid} from 'uuid'
import { useNavigate } from 'react-router-dom';

export const Signup = () => {

  //navigate to courses
  let navigate=useNavigate()

  let [userData,setUserData]=useState({email:"",phone:"",username:"",password:"",uuid:randomid()});
  function handleChange(e){
      setUserData({...userData,[e.target.name]:e.target.value})
  }

  async function handleSubmit(e){
    e.preventDefault();
    //(userData.email!="" && userData.phone!="" && userData.username!="" && userData.password!="")? await axios.post("http://localhost:3000/users",userData) && toast.success("Signup Successful 🎉") && setUserData({ email: "", phone: "", username: "", password: "" }) : toast.error("!..inavalid credentials..!");

    // Basic validation
    if (!userData.email || !userData.phone || !userData.username || !userData.password) {
      toast.error("Please fill all fields")
      return
    }


    // Check if user already exists
    let res= await axios.get(`https://coursemanagement-backend-tqsi.onrender.com/users?email=${userData.email}&username=${userData.username}`)
    // console.log(res.data.length);
    if (res.data.length!=0) {
      toast.error("User account is already available")
      return
    }


    // Add new user
    try {
      await axios.post("https://coursemanagement-backend-tqsi.onrender.com/users", userData)
      toast.success("Signup Successful 🎉")
      setUserData({ email: "", phone: "", username: "", password: "" }) // reset form
      //navigate to courses page
      navigate("/courses")
    } catch (err) {
      console.error(err)
      toast.error("Signup failed! Please try again.")
    }

    

  }




  return (
    
    <form className='signup' onSubmit={handleSubmit}>

      <input type="email" placeholder="Email" name="email" value={userData.email} onChange={handleChange} />
      <input type="tel" placeholder="Phone"  name="phone" value={userData.phone} onChange={handleChange}/>
      <input type="text" placeholder="Username"  name="username" value={userData.username} onChange={handleChange}/>
      <input type="password" placeholder="Password"  name="password" value={userData.password} onChange={handleChange}/>
      <button>Sign Up</button>


    </form>

        
  )
}
