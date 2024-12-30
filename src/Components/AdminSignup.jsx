import React from 'react'
import '../Styles/AdminSignup.css'
import axios from 'axios'
import {useState} from 'react'
 const AdminSignup = () => {
  let[email,setemail]=useState("")
  let[name,setname]=useState("")
  let[password,setpassword]=useState("")
  let[phone,setphone]=useState("")

  let data={email,name,password,phone}
  function addAdmin (){
    axios.post('http://localhost:1000/Admin',data)
    .then((res)=>{
  console.log(res);
  alert("Admin creates Successfull")
  
    })
    .catch((err)=>{
      console.log(err);
      alert ("Invalid Data")
      
    })
  }
   
  return (

    <div className='AdminSignup'>
      <div className='background'></div>
      
    <form onSubmit={addAdmin} action="form">
    <h3 id='t'>AdminSignup</h3>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Name'/>
    <input type="email" value={email} onChange={(e)=>(setemail(e.target.value))} placeholder='Enter the Email'/>
    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the password'/>
    <input pattern='[0-9]{10}'type='tell' value={phone} onChange={(e)=>(setphone(e.target.value))} placeholder='Enter the phno'/>
    <button id='k'color='btn btn-primary'>Signup</button>
    </form>
    </div>
  )
}
export default AdminSignup
