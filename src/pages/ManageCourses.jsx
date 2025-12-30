// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import { Left } from './managecourses pages/left'
// export const ManageCourses = () => {
//   return (
//     <div className='managecourses'>
//       <Left/>
//       <Outlet/> || <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}> <h1>Welcome to Manage Section</h1></div>

//     </div>
//   )
// }


import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Left } from './managecourses-pages/Left'

export const ManageCourses = () => {
  const location = useLocation()

  const isRootManage =
    location.pathname === '/managecourses'

  return (
    <div className='managecourses'>
      <Left />

      <div className="right">
        {isRootManage ? (
            <p style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%"
          }}>Welcome <strong>ㅤAdmin</strong></p>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  )
}

