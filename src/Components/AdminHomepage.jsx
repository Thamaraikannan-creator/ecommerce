import React from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'
import {Routes,Route}from "react-router-dom";
import AdminViewItems from './AdminViewItems';
import AdminAddProducts from './AdminAddProducts'
import UpdateProducts from './UpdateProducts';

export default function AdminHomepage() {
  return (
    <div>
        <AdminNavbar/>
        <Routes>
          <Route path='/addproducts' element={<AdminAddProducts/>}/>
          <Route path='/viewproducts' element={<AdminViewItems/>}/>
          <Route path='/updateproducts/:id' element={<UpdateProducts/>}/>
        </Routes>
        <Footer/>
        </div>
  )
}
