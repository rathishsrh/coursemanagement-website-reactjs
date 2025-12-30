import React from 'react'
import { NavLink } from 'react-router-dom'

export const Left = () => {
  return (
    <div className='left'>
        <NavLink to="editcourse">Edit</NavLink>
        <NavLink to="addcourse">Add</NavLink>
        <NavLink to="removecourse">Remove</NavLink>
    </div>
  )
}
