import { useState,useEffect } from "react";
import React from 'react';
import { popularProducts } from '../../data';
import Product from './Product';
import './products.css';
import axios from "axios"

const Products = () => {
  const [users,setUsers]=useState([]);
  const fetchUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/Products/products`);
        const jsonData = response.data;
       
        setUsers(jsonData);
        console.log(users);
       
      
    } catch (error) {
        console.error("Error fetching user name:", error);
    }
}

  useEffect(()=>{
         fetchUsers();
  },[]);

  return (
    <div className='products_container'>
      <div className='products_title'>  
        <h1>Our Products</h1>
      </div>
    
       <div className='products_container_list'>
      
 {users.map((item) => (
            <Product item={item} key={item._id}  />
        ))} 
       
      </div> 
    </div>
  )
}

export default Products