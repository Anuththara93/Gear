import { GridColDef } from "@mui/x-data-grid";
import "./add.css";
import axios from 'axios';
import { useState } from 'react';

const Add = ({slug, setOpen, fetchuser}) => {

  const [name,setName]=useState("");
  const [nic,setNIC]=useState("");
  const [address,setAddress]=useState("");
  const [contactno,setContact]=useState("");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const hello = await axios.post('http://localhost:3001/Workers/register', { name, nic,contactno,address });
        alert("Worker Added Successfully");
        fetchuser();
    }
    catch (error) {
        alert("NIC Have Taken");

    }
    setOpen(false)
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setOpen(false)}>
      close
        </span>
        <h1>Add Worker</h1>
        <form onSubmit={handleSubmit}>
              <div className="item">
                <label>Name</label>
                <input type="String" required={true} minLength={5} placeholder="Name" onChange={(event) => { setName(event.target.value) }} />
              </div>
              <div className="item">
                <label>NIC</label>
                <input type="String" required={true} minLength={12} placeholder="NIC" onChange={(event) => { setNIC(event.target.value) }} />
              </div>
              <div className="item">
                <label>Address</label>
                <input type="String" required={true} minLength={5} placeholder="Address" onChange={(event) => { setAddress(event.target.value) }} />
              </div>
              <div className="item">
                <label>Contact No</label>
                <input type="Number" required={true} minLength={5} placeholder="Number" onChange={(event) => { setContact(event.target.value) }} />
              </div>
  
          <button type='submit'>ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Add;