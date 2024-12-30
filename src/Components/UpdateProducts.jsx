import { useState,useEffect } from "react"
import React from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { toast } from "react-toastify"
import '../Styles/Updateproduct.css'
function UpdateProducts(){
    let[Category,setCategory]=useState("")
    let[name,setName]=useState("")
    let[price,setPrice]=useState("")
    let[image,setImage]=useState("")
    let[rating,setRating]=useState("")
    let[desc,setDesc]=useState("")

    let data={Category,name,price,image,rating,desc}
    function updateItem(e){
      e.preventDefault();
    axios.put(`http://localhost:1000/Product/${param.id}`,data)
    .then((res)=>{
        console.log(res);
        toast.success('Item updated Successfully')
        
    })
    .catch((err)=>{
        console.log(err);
        toast.err('Invalid Data Format')
        
    })
}

    let param =useParams();

    useEffect(()=>{
      axios.get(`http://localhost:1000/Product/${param.id}`)
      .then((res)=>{
        console.log(res.data);
        setName(res.data.name)
        setCategory(res.data.Category)
        setImage(res.data.image)
        setPrice(res.data.price)
        setRating(res.data.rating)
        setDesc(res.data.desc)
        
      })
      .catch((err)=>{
        console.log(err);
        
      })
    },[])

   
    return(
        <div className="updateproducts">
            <form  onSubmit={updateItem}action="">
                <fieldset>
                    <label htmlFor="">category:</label>
                    <select required value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                        <option>Dress Materails</option>
                        <option>Mobile</option>
                        <option>Mobile Accesories</option>
                        <option>Electronics</option>``
                        <option>Furnitures</option>
                        <option>Groceries</option>
                    </select>
                    <label htmlFor="">Product Name</label>
                    <input   required value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter the Product Name" />
                    <label htmlFor="">Product Price</label>
                    <input   required value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" placeholder="Enter the Product Price" />

                    <label htmlFor="">Thumbnail</label>
                    <input  required value={image} onChange={(e)=>{setImage(e.target.value)}} type="img" placeholder="Enter the Image Address" />
                    <label htmlFor="">Ratings</label>
                    
                   
                    <input  required value={rating} onChange={(e)=>{setRating(e.target.value)}} type="Number" placeholder="Enter the ratings" />
                    <label htmlFor="">Desc</label>
                    <textarea  required value={desc} onChange={(e)=>{setDesc(e.target.value)}} rows="2" placeholder="Enter the text" cols="30"></textarea>
                    <button className="btn btn-danger">Add Items</button>
                </fieldset>
            </form>

                
                
        </div>
    )
}
export default UpdateProducts;