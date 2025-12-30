// import React, { useContext } from 'react'
// import { ContextForAuth } from '../context/AuthProvider';

export const CourseCard = (props,{handleClick}=props) => {

  // let {auth,setAuth}=useContext(ContextForAuth);
  
  return (
    <div className='coursecard'>
        <img src={props.courseImage} alt="" />
        <p>{props.courseName}</p>
        <p><strong>CourseId:</strong>{props.id}</p>
        <p><strong>Duration: </strong>{props.courseDuration}</p>
        <p><strong>Author: </strong>{props.courseAuthor}</p>
        <p><strong>Fee:  ₹</strong>{props.coursePrice}</p>

        {/* {auth=="user"? <button onClick={()=>handleClick(props.id)}>Add to Cart</button>:""} */}
        {/* ✅ Safe check */}
        {handleClick && (<button onClick={() => handleClick(props.id)}>Add to Cart</button>
      )}
    </div>
  )
}
