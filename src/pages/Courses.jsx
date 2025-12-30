// import React, { useContext, useEffect, useState } from 'react'
// import axios from "axios"
// import {CourseCard} from '../cards/CourseCard'
// import { ContextForAuth } from '../context/AuthProvider';

// export const Courses = () => {

// let {auth,setAuth}=useContext(ContextForAuth);

// // if(auth=="admin")
// // {
// //     let [data,setData]=useState([]);
// //     async function getCourses(){
// //       let res = await axios.get("http://localhost:3000/courses")
// //       console.log(res.data);
      
// //       setData(res.data);
// //     }
// //     useEffect(()=>{
// //       getCourses();
// //     },[])


// //   return (
// //     <div className='courses'>
// //         {data.map((el)=>{
// //          return  <CourseCard key={el.id} {...el}/>
// //         })}
// //     </div>
// //   )
// // }


// //  if(auth=="user")
// // {
//     let [data,setData]=useState([]);
//     async function getCourses(){
//       let res = await axios.get("http://localhost:3000/courses")
//       console.log(res.data);
      
//       setData(res.data);
//     }
//     useEffect(()=>{
//       getCourses();
//     },[])

//   let [cart,setCart]=useState([])
//   function handleClick(id){
//     let c=data.filter((el)=>{
//       return el.id == id;
//     })
    
//     setCart({...cart, c});
//     console.log(cart);
    

//   }

//   return (
//     <div className='courses'>
//         {data.map((el)=>{
//          return  <CourseCard key={el.id} {...el} handleClick={handleClick}/>
//         })}
//     </div>
//   )
// // }
    
// }



import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { CourseCard } from '../cards/CourseCard'
import { ContextForAuth } from '../context/AuthProvider'
import { CartContext } from '../context/CartProvider'
import { toast } from 'react-toastify'

export const Courses = () => {
  const { auth } = useContext(ContextForAuth)
  const { addToCart } = useContext(CartContext)

  const [data, setData] = useState([])
  // const [cart, addToCart] = useState([])

  async function getCourses() {
    try {
      const res = await axios.get("https://coursemanagement-backend-tqsi.onrender.com/courses")
      setData(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getCourses()
  }, [])

  function handleClick(id) {
    const selected = data.find(el => el.id === id)
    addToCart(selected)
    toast.success(`${selected.courseName}Added to cart`)
    // console.log(selected)
  }

  return (
    <div className='courses'>
      {data.map(el => (
        <CourseCard
          key={el.id}
          {...el}
          // isAdmin={auth === "admin"}
          handleClick={auth === "user" ? handleClick : null}
        />
      ))}
    </div>
  )
}
