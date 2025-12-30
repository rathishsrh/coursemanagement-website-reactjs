import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ContextForAuth } from '../context/AuthProvider';

export const Header = () => {
  let {auth,setAuth}=useContext(ContextForAuth);
  
  return (
    <div className='header'>

      <div className="headerleft">
        <h2 className='academy'>Rath's Academy</h2>
        {/* <img src="https://png.pngtree.com/png-clipart/20221030/original/pngtree-university-logo-in-flat-style-png-image_8743731.png" alt="" /> */}
      </div>

      <div className="headerright">
        {auth=="admin"?<NavLink to="/managecourses">Manage Courses</NavLink>:""}
        {auth=="user"? <NavLink to="/cart">Cart</NavLink>:""}

        {auth=="admin" || auth=="user" ? <NavLink to="/courses">Courses</NavLink>:""}
        {auth=="admin" || auth=="user" ? "":<NavLink to="/signup">SignUp</NavLink>}
        {auth=="admin" || auth=="user" ?<NavLink onClick={()=>{setAuth("")}}>Logout</NavLink>:<NavLink to="/">LogIn</NavLink>}


      </div>
     
    </div>
  )
}
