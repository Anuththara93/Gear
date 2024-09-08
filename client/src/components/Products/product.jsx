import React from 'react';
import productimage from './1.jpg';
import './product.css';
import { Link } from 'react-router-dom';

const Product = ({item}) => {
  return (

    <div>
      <Link to={`/productview?param1=${item.title}&param2=${item.itemcost}&param3=${item.imageurl}&param4=${item.noinstock}`} className='product_container'>
        <div className='image_container'>
            <img src={require(`../../../src/pages/admin/assests/Products/${item.imageurl}`)}width="200px" height="200px" />
        </div>
        <div className='product_info'>
            <p>{item.title}</p>
            <p>Rs {item.itemcost}</p>
        </div>
        <div className='cart'>
           <button className='Product_View'>View</button> 
        </div> 
    </Link>
    </div>
  )
}

export default Product