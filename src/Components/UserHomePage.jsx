import React from 'react'
import Footer from './Footer'
import {Routes,Route}from "react-router-dom";
import UserNavbar from '../Components/UserNavbar';
import UserViewProducts from './UserViewProducts';
import UserViewCart from '../Components/UserViewCart'

export default function UserHomepage() {
  return (
    <div>
      <UserNavbar/>
        <Routes>
          <Route path='/viewproducts' element={<UserViewProducts/>}/>
          <Route path='/viewcart' element={<UserViewCart/>}/>
        </Routes>
        <Footer/>
        </div>
  )
}
