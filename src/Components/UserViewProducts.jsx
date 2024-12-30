import axios from 'axios';
import React from 'react'
import {useState,useEffect} from 'react';
import '../Styles/Userviewproduct.css'

export default function UserViewProducts () {
  let[products,setproducts]=useState([])
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

  },[])
  console.log(products);

function addtocart(id,name,price,image){
  let data = {id,name,price,image}
  function fetchdata(){
    axios.post('http://localhost:1000/Cart',data)
    .then((res)=>{
      console.log(res.data);
      
    })
    .catch((err)=>{
      console.log(err);
      
    })
  }
  fetchdata()
}



  return (
   <div className="UserViewpro">
    {products.map((product)=>{
    return(
      <div className="sub_items">
        <div className="card1">
          <div className="thumbnail">
      
            <img src={product.image} alt="" />
          </div>
          <div className="description">
            <h3>{product.name}</h3>
            
            <span id='cost'>M.R.P : <big><strike>{product.price}</strike></big></span>
            <h5>Offer Price : 12% off $ {Math.round(product.price*0.88)}</h5>
            <p>Description : {product.desc}</p>
            <span> Rating : <b>{product.rating}*</b></span>
            <br />
            <button  onClick={()=>{addtocart(product.id,product.name,product.price,product.image)}} className='m-3 btn btn-primary'>cart</button>
          </div>
        </div>
      </div>
    )
    })}
   </div>
  )
}

