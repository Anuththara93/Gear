import { GridColDef } from "@mui/x-data-grid";
import "./add.css";
import axios from 'axios';
import { useState } from 'react';

const AddI = ({slug, setOpen, fetchuser,userid}) => {

  const [title,setTile]=useState("");
  const [imageurl,setimgURL]=useState("");
  const [noinstock,setNoinStock]=useState(0);
  const [category,setCategory]=useState("");
  const [itemcost,setcost]=useState("");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      
        const hello = await axios.post(`http://localhost:3001/Products/register/`,{title,imageurl,noinstock,category,itemcost});
        alert("Product");
        fetchuser();
    }
    catch (error) {
        alert("Error Occured");

    }
    setOpen(false)
  };

  const handleimage=(e)=>{
    setimgURL(e.target.files[0]);
    console.log(e.target.files[0]);
  }

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
      close
        </span>
        <h1>Add Product</h1>
        <form onSubmit={handleSubmit}>
              <div className="item">
                <label>Title</label>
                <input type="String" required={true} minLength={5} maxLength={255} placeholder="Title"onChange={(event) => { setTile(event.target.value) }} />
              </div>
              <div className="item">
                <label>Image URL</label>
                <input type="String" minLengthn={2}  maxLength={255} placeholder="Image URL" onChange={(e)=>setimgURL(e.target.value)}  />
              </div>
              <div className="item">
                <label>Number in Stock</label>
                <input type="Number" required={true} minLength={5} maxLength={255} placeholder="Number in Stock"onChange={(event) => { setNoinStock(event.target.value) }} />
              </div>
              <div className="item">
                <label>Category</label>
                <input type="String" required={true} minLength={5} maxLength={255} placeholder="Category"onChange={(event) => { setCategory(event.target.value) }} />
              </div>
              <div className="item">
                <label>Item Cost</label>
                <input type="Number" required={true} minLength={5} maxLength={100000000} placeholder="Item Cost"onChange={(event) => { setcost(event.target.value) }} />
              </div>
  
          <button type='submit'>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default AddI;