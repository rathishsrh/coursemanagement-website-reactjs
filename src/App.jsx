import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css"
import { Layout } from "./Layout"
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'
import { Courses } from "./pages/Courses"
import { ManageCourses } from "./pages/ManageCourses"
import { EditCourse } from "./pages/managecourses-pages/EditCourse"
import { AddCourse } from "./pages/managecourses-pages/AddCourse"
import { RemoveCourse } from "./pages/managecourses-pages/RemoveCourse"
import { Cart } from "./pages/Cart"
export let App=()=>{

    let myRouter=createBrowserRouter([
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Login/>
                },
                {
                    path:'/signup',
                    element:<Signup/>
                },
                {
                    path:'/courses',
                    element:<Courses/>
                },
                {
                    path:"/cart",
                    element:<Cart/>
                },
                {
                    path:"managecourses",
                    element:<ManageCourses/>,
                    children:[
                        {
                            path:"editcourse",
                            element:<EditCourse/>
                        },
                        {
                            path:"addcourse",
                            element:<AddCourse/>
                        },
                        {
                            path:"removecourse",
                            element:<RemoveCourse/>
                        }
                    ]
                }
            ]
        }
    ])
    
    
  return (<RouterProvider router={myRouter}/>)

}
