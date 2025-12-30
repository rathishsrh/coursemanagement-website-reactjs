import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const EditCourse = () => {

let [id,setId]=useState(""); 
function handleChangeId(e){
    setId(e.target.value)
}

let [data,setData]=useState({})   
function handleChange(e){
    setData({...data, [e.target.name]:e.target.value})
}


async function handleSubmit(e){
  e.preventDefault();
  let res=await axios.patch(`https://coursemanagement-backend-tqsi.onrender.com/courses/${id}`,data);
  console.log(res.status);
    
    //sucess message
    if(res.status==200)
    {
      toast.success("successfully Edited")
    }  

}
  return (
    <div className='right'>
        <form onSubmit={handleSubmit} className='courseform'>
            <input type="text" name="id" value={id} placeholder="id" onChange={handleChangeId}/>
            <input type="text" name="courseName"  placeholder='courseName' onChange={handleChange}/>
            <input type="text" name="courseImage"  placeholder='courseImage' onChange={handleChange}/>
            <input type="text" name="courseDuration" placeholder='courseDuration' onChange={handleChange}/>
            <input type="text" name="courseAuthor" placeholder='courseAuthor' onChange={handleChange}/>
            <input type="text" name="coursePrice" placeholder='coursePrice' onChange={handleChange}/>
            
            <button>Submit</button>
        </form>
    </div>
  )
}
