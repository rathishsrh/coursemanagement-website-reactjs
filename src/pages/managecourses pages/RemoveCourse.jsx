import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const RemoveCourse = () => {
   let [courseId,setCourseId]=useState("")

  function handleChange(e){
    setCourseId(e.target.value)
  }
  async function handleSubmit(e){
    e.preventDefault();
    let res = await axios.delete(`http://localhost:3000/courses/${courseId}`);
    // console.log(res.status);
    
    //sucess message
    if(res.status==200)
    {
      toast.success("successfully Removed")
    }


  }
  return (
    <div className='right'>
      <form onSubmit={handleSubmit} className='courseform'>
        <input type="text"  placeholder='Enter courseId' value={courseId} onChange={handleChange}/>
        <button>Remove</button>
      </form>
    </div>
  )
}
