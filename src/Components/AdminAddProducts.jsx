import axios from "axios";
import React from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import '../Styles/AdminProduct.css';

function AdminAddProducts() {
    let [Category, setCategory] = useState("")
    let [name, setName] = useState("")
    let [price, setPrice] = useState("")
    let [image, setImage] = useState("")
    let [rating, setRating] = useState("")
    let [desc, setDesc] = useState("")

    let data = { Category, name, price, rating, image, desc }

    function addproducts(e) {
        e.preventDefault();
        axios.post('http://localhost:1000/Product', data)
            .then((res) => {
                console.log(res)
                toast.success("Data added successfully")
            })
            .catch((err) => {
                console.log(err);
                toast.error("Invalid Data")

            })  
    }
    return (
        <div className="addproducts">
            <form className="amma" onSubmit={addproducts} action="">
                <fieldset>
                    <select required value={Category} onChange={(e) => { setCategory(e.target.value) }} type="text"  >
                        <option >Mobile</option>
                        <option >Electronics</option>
                        <option >Furnitures</option>
                        <option >Dress Material</option>
                        <option >Groceries</option>
                    </select>
                    <input required value={name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter the Product Name" />

                    <input required value={price} onChange={(e) => { setPrice(e.target.value) }} type="text" placeholder="Enter the Product Price" />


                    <input required value={image} onChange={(e) => { setImage(e.target.value) }} type="img" placeholder="Enter the Image Address" />
+
                    <input required value={rating} onChange={(e) => { setRating(e.target.value) }} type="Number" placeholder="Enter the ratings" />

                    <textarea required value={desc} onChange={(e) => { setDesc(e.target.value) }} rows="2" placeholder="Enter the text" cols="30">description</textarea>
                    <button className="btn btn-danger">Add Items</button>
                </fieldset>
            </form>
        </div>
    )
}
export default AdminAddProducts;