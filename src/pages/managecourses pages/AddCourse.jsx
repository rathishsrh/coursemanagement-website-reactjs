import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-toastify';
import {v4 as randomid} from 'uuid';

export const AddCourse = () => {

  let [data,setData]=useState({courseName:"",courseImage:"",courseDuration:"",courseAuthor:"",coursePrice:"",id:randomid()})

  function handleChange(e){
    setData({...data,[e.target.name]:e.target.value})
  }
  
  async function handleSubmit(e){
    e.preventDefault();
    let res = await axios.post("http://localhost:3000/courses",data);
    // console.log(res.status);
    
    //sucess message
    if(res.status==201)
    {
      toast.success("successfully Added")
    }
  }

  return (
    <div className='right'>
        <form onSubmit={handleSubmit} className='courseform'>
          <p>*id automatically generated</p>
            <input type="text" name="courseName"  placeholder='courseName' onChange={handleChange}/>
            <input type="text" name="courseImage"  placeholder='courseImage' onChange={handleChange}/>
            <input type="text" name="courseDuration" placeholder='courseDuration' onChange={handleChange}/>
            <input type="text" name="courseAuthor" placeholder='courseAuthor' onChange={handleChange}/>
            <input type="text" name="coursePrice" placeholder='coursePrice' onChange={handleChange}/>
            <button>Add</button>
        </form>
    </div>
  )
}
