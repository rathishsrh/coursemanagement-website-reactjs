import axios from 'axios';
import React, { useContext, useState } from 'react'
import { ContextForAuth } from '../context/AuthProvider';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Login = () => {


  //role - context API
  let {auth,setAuth}=useContext(ContextForAuth);
  //navigate to courses
  let navigate=useNavigate()

  let [data,setData]=useState({email:"",password:"",role:""});
  function handleChange(e){
      setData({...data,[e.target.name]:e.target.value})
  }
  async function handleSubmit(e){
      e.preventDefault();

      // Basic validation
      if (!data.email || !data.password || !data.role) 
      {
        toast.error("Please fill all fields")
        return
      }

      //check is user/admin is available
      let res;
      if(data.role=="admin")
      {
        res = await axios.get(`http://localhost:3000/admin?email=${data.email}&password=${data.password}`)
      }
      else {
        res = await axios.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`)
      }

      if (res.data.length > 0) {
        toast.success(`Login Success as ${data.role}`)
        setAuth(data.role)
          // // persist auth
          // localStorage.setItem("auth", data.role);
        navigate("/courses") // navigate to courses after login
      } else {
        toast.error("Invalid credentials")
      }
      
          

    }

  return (
    <div className='login'>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email" name='email' value={data.email} onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" id="" value={data.password} onChange={handleChange} />
            <div className="role">
              Role: <input type="radio" name="role"  checked={data.role === "admin"} value="admin" onChange={handleChange}/> Admin
                  <input type="radio" name="role"  checked={data.role === "user"} value="user" onChange={handleChange}/> User
            </div>
            <button>LogIn</button>
        </form>

    </div>
  )
}
