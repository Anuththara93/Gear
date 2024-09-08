import React, { useEffect, useState } from 'react';
import './productView.css';
import { Link,useParams,useLocation } from 'react-router-dom';
import { useRef } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie'

const ProductView = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const param1 = searchParams.get('param1');
  const param2 = searchParams.get('param2');
  const param3 = searchParams.get('param3');
  const param4 = searchParams.get('param4');
  const inputRef = useRef(null);
  const [usename,setUserName]=useState("");
  const [userID,setID]=useState("");
  const [address,setAddress]=useState("");
  const fetchUserName = async () => {
    try {
      
        const userId = window.localStorage.getItem("userID");
        console.log(userId);
        const response = await axios.get(`http://localhost:3001/Customer/customer/${userId}`);
        const { username,_id,address } = response.data;
        setUserName(username);
        setID(_id)
        setAddress(address)
    } catch (error) {
        console.error("Error fetching user name:", error);
    }
}

  const Buynow=async ()=>{
    if(cookies.access_token){
      const  inputValue= inputRef.current.value;
      const num = parseInt(param4);
      const value = parseInt(param2);
      console.log(param1);
      const total=value*num;
      if(inputValue>num){
          alert('Empty Stock')
          return
      }
      const remainder=num-inputValue;
      try {
        const response = await axios.post('http://localhost:3001/Order/register', { UId:userID, Uname:usename,PName:param1,Quantity:inputValue,Total:total,Address:address });
        
        alert('Order Completed '+usename+" Thank you!" )
    }
    catch (error) {
        alert("Invalid E mail/Password");
  
    }
    }
   else{
    alert('Login for buy the product')
   }
   
  }

  useEffect(() => {
   
    if (cookies.access_token) {
      fetchUserName();
  }
    window.scrollTo(0, 0);
  }, []);


  return (
    <div>
    <div className='productView_container'>
        <div className='productView_image_container'>
            <img src={require(`../../pages/admin/assests/Products/${param3}`)} />
        </div>
        <div className='productView_info_container'>
            <h1>{param1}</h1>
            <h1>Rs. {param2}</h1>
            <div className='productView_container_icon'>
              <p>Free Delivery</p>
            </div>
            
            <hr />
            <div className='productView_add_container'>
                <input type='number' min='1' defaultValue='1' ref={inputRef}/>
                <button onClick={Buynow}  className='linkto_cart'>BUY NOW</button>
            </div>
        </div>
        </div>
        <div className='footerr'>
                <div className='footermain'>
                    <div className='footerdiv'>
                        <h2 className='footerh2'>Main Links</h2>
                        <ul className='footerul'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div className='footerdiv'>
                        <h2 className='footerh2cd'>Contact Details</h2>
                        <div className='divl'>
                            <div className='footeri'><p>+94766516238</p></div>
                            <div className='footeri'><p>contact@gear.com</p></div>
                        </div>
                    </div>
                    <div className='footerdiv'>
                        <h2 className='footerh2'>Stores</h2>
                        <ul className='footerul'>
                            <li>Gampaha</li>
                            <li>Colombo 5</li>
                            <li>Galle</li>
                        </ul>
                    </div>
                </div>
                <div className='footerc'>
                    <p>Copyright © 2023 GEAR</p>
                </div>
            </div>
    </div>
  )
}

export default ProductView