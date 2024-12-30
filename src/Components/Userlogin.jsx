import React, { useEffect, useState } from 'react'
import '../Styles/User.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Userlogin(){
  let[username,setusername]=useState("")
  let[password,setpassword]=useState("")
  let[Admin,setAdmin]=useState([])
  useEffect(()=>{
    async function fetchAdmin() {
      let data =await fetch('http://localhost:1000/User')
      let res =await data.json();
      setAdmin(res)
      
    }fetchAdmin()
  },[])
let navigate =useNavigate();
  function login(){
    let val = Admin.filter((x)=>
    {return x.email === username && x.password === password})
    if(val.length>0){
      alert("Login Succesfull")
      navigate('/userHomepage')

    }
    else{
      alert("Invalid Credentials")
    }
  }
  return(
    <div className="User">
      <form actionbar=''>
        <h2>User</h2>
        <input type="text"  value={username} onChange={(e)=>{setusername(e.target.value)}}
        placeholder='Enter the username'/>
        <input type="text"  value={password} onChange={(e)=>{setpassword(e.target.value)}}
        placeholder='Enter the passcode'/>
        <button id='tks'onClick={login}> Login </button><br />
        <span> click here<Link  to="/usersignup" color='btn btn-primary'>Signup </Link> </span>
      </form>
    </div>
  )
  
}

export default Userlogin