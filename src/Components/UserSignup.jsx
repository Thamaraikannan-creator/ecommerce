import React from 'react'
import '../Styles/UserSignup.css'
import axios from 'axios'
import {useState} from 'react'
 const UserSignup = () => {
  let[email,setemail]=useState("")
  let[name,setname]=useState("")
  let[password,setpassword]=useState("")
  let[phone,setphone]=useState("")

  let data={email,name,password,phone}
  function addUser (){
    axios.post('http://localhost:1000/User',data)
    .then((res)=>{
  console.log(res);
  alert("User creates Successfull")
  
    })
    .catch((err)=>{
      console.log(err);
      alert ("Invalid Data")
      
    })
  }
   
  return (

    <div className='UserSignup'>
      <div className='background'></div>
      
    <form onSubmit={addUser} action="form">
    <h3 id='t'>UserSignup</h3>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} placeholder='Enter the Name'/>
    <input type="email" value={email} onChange={(e)=>(setemail(e.target.value))} placeholder='Enter the Email'/>
    <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter the password'/>
    <input pattern='[0-9]{10}'type='tell' value={phone} onChange={(e)=>(setphone(e.target.value))} placeholder='Enter the phno'/>
    <button id='k'color='btn btn-primary'>Signup</button>
    </form>
    </div>
  )
}
export default UserSignup
