import React from 'react'
import { Header } from './components/Header'
import {Footer} from './components/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const Layout = () => {
  return (
    <div className='layout'>
        <Header/>
        <Outlet/>
        <Footer/>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>


    </div>
  )
}
