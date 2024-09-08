import { GridColDef } from "@mui/x-data-grid";
import "./add.css";
import axios from 'axios';
import { useState } from 'react';

const Update = ({slug, setUpdate, fetchuser,userid}) => {

  const [name,setName]=useState("");
  const [nic,setNIC]=useState("");
  const [address,setAddress]=useState("");
  const [contactno,setContact]=useState("");
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const hello = await axios.put(`http://localhost:3001/Workers/worker/${userid}`,{name,nic,address,contactno});
        alert("Worker Updated Successfully");
        fetchuser();
    }
    catch (error) {
        alert("Error Occured");

    }
    setUpdate(false)
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => setUpdate(false)}>
      close
        </span>
        <h1>Update {slug}</h1>
        <form onSubmit={handleSubmit}>
              <div className="item">
                <label>Name</label>
                <input type="String" required={true} min={5} placeholder="Name"onChange={(event) => { setName(event.target.value) }} />
              </div>
              <div className="item">
                <label>NIC</label>
                <input type="String" min={12} placeholder="NIC"onChange={(event) => { setNIC(event.target.value) }} />
              </div>
              <div className="item">
                <label>Address</label>
                <input type="Address" required={true} min={5} placeholder="Name"onChange={(event) => { setAddress(event.target.value) }} />
              </div>
              <div className="item">
                <label>Contact No</label>
                <input type="Number" required={true} min={5} placeholder="Number"onChange={(event) => { setContact(event.target.value) }} />
              </div>
  
          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  );
};

export default Update;