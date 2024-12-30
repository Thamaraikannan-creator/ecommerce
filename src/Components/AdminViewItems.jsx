import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react';
import {toast} from   'react-toastify';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import '../Styles/AdminViewItems.css'

export default function AdminViewItems () {
  let[products,setproducts]=useState([])
  let[force,setForce]=useState(0)
  useEffect(()=>{
    function fetchData () {
      axios.get('http://localhost:1000/Product')
      .then((res)=>{
        setproducts(res.data)
      })
      .catch((err)=>{
        console.log(err);
        
      })
    }
    fetchData()

  },[force])
  console.log(products);

  function deleteProduct(id,name){
    axios.delete(`http://localhost:1000/Product/${id}`)
    .then(()=>{
      toast.success(`${name} Deleted Successfully`)
      setForce(force+1)
    })
    .catch(()=>
   toast.error(`Data not Present`) )
  }

  let navigate = useNavigate()
  function editpage(id){
  navigate(`/adminhomepage/updateproducts/${id}`)}


 
  
  return (
   <div className="AdminViewItems">
    {products.map((product)=>{
    return(
      <div className="sub_items">
        <div className="card1">
          <div className="thumbnail">
          <h3>{product.Category}</h3>
            <img src={product.image} alt="" />
          </div>
          <div className="description">
            <h3>{product.name}</h3>
            
            <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
            <h5>Offer Price : 12% off $ {Math.round(product.price*0.88)}</h5>
            <p>Description : {product.desc}</p>
            <span> Rating : <b>{product.rating}*</b></span>
            <br />
            <button  onClick={()=>{editpage(product.id)}}className='m-3 btn btn-warning'><EditIcon/>update</button>
            <button onClick={()=>{deleteProduct(product.id,product.name)}} className='m-3 btn btn-danger'> <DeleteIcon/> delete</button>
          </div>
        </div>
      </div>
    )
    })}
   </div>
  )
}

