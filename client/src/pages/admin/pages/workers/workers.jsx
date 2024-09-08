import DataTable from "../../components/dataTable/dataTable";
import "./workers.css";
import { useState } from "react";
import Add from "../../components/add/add_worker";
import { workers } from "../../data";
import axios from "axios"
import React,{ useEffect} from "react"
import Update from "../../components/update/update_workers";

const Workers = () => {
  const [open, setOpen] = useState(false);
  const [users,setUsers]=useState([]);
  const [userid,setuserid]=useState("");
  const [update,setUpdate]=useState(false);
 
  const fetchUsers = async () => {
    try {
        const response = await axios.get(`http://localhost:3001/Workers/worker/`);
        const jsonData = response.data;
        setUsers(jsonData);
       
      
    } catch (error) {
        console.error("Error fetching user name:", error);
    }
}

  useEffect(()=>{
         fetchUsers();
  },[]);


  return (
    <div className="users">
    <div className="info">
      <button className="worker_addbutton" onClick={() => setOpen(true)}>Add New Worker</button>
      <h1>Store Workers</h1>
    </div>
    <UserTable fetchUsers={fetchUsers} users={users}  setUpdate={setUpdate} setuserID={setuserid} /> 
    {open && <Add slug="worker"  setOpen={setOpen} fetchuser={fetchUsers}/>}
    {update && <Update slug="worker"  setUpdate={setUpdate} fetchuser={fetchUsers} userid={userid} />}
 
  </div>
  );
};


function UserTable({ users,fetchUsers,setUpdate,setuserID }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  const onDeleteUser = async (user) =>{
        try {
  
            const response = await axios.delete(`http://localhost:3001/Workers/worker/${user}`);
            alert('Worker Deleted')
            fetchUsers();

        }
        catch (error) {
            alert("Error");

        }
      };

const onUpdateUser = (user) =>{
setUpdate(true);
setuserID(user);
}
      
  return (
    <div className="usertable">
    <input
      type="text"
      placeholder="Search for users..."
      value={searchTerm}
      onChange={handleSearch}
      className="usertable_search"
    />
    <table>
      <thead>
        <tr>
          <th className="usertable_th">ID</th>
          <th className="usertable_th">Worker Name</th>
          <th className="usertable_th">NIC</th>
          <th className="usertable_th">Contact Number</th>
          <th className="usertable_th">Address</th>
          <th className="usertable_th">Action</th> {/* Add the Action column for buttons */}
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user._id}>
            <td className="usertable_td">{user._id}</td>
            <td className="usertable_td">{user.name}</td>
            <td className="usertable_td">{user.nic}</td>
            <td className="usertable_td">{user.contactno}</td>
            <td className="usertable_td">{user.address}</td>
            <td className="usertable_td usertablebutton">
              <button className="usertable_delete" onClick={() => onDeleteUser(user._id)}>Delete</button>
              <button className="usertable_update" onClick={() => onUpdateUser(user._id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Workers;
