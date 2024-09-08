import DataTable from "../../components/dataTable/dataTable";
import "./users.css";
import React,{ useEffect, useState } from "react"
import Add from "../../components/add/add_worker";
import { userRows } from "../../data";
import noavatar from '../../assests/noavatar.png';
import axios from "axios"
import Update from "../../components/update/update_workers";


const Users = () => {
  const [open, setOpen] = useState(false);
  const [users,setUsers]=useState([]);

  const [update,setUpdate]=useState(false);

 
  const fetchUsers = async () => {
    try {
      
        const response = await axios.get(`http://localhost:3001/Customer/customer/`);
        const jsonData = response.data;
        setUsers(jsonData);
        console.log(jsonData);
      
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
      <h1>Users</h1>
    </div>
    <UserTable fetchUsers={fetchUsers} users={users} /> 
    {update && <Update slug="worker"  setUpdate={setUpdate} fetchuser={fetchUsers} />}

  </div>
  );
};


function UserTable({ users,fetchUsers,setUpdate }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm)
  );

  const onDeleteUser = async (user) =>{
        try {
            const userId = window.localStorage.getItem("userID");
            const response = await axios.delete(`http://localhost:3001/Customer/customer/${user}`);
            alert('Customer Deleted')
            fetchUsers();

        }
        catch (error) {
            alert("Invalid E mail/Password");

        }
  };

  

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
          <th className="usertable_th">User Name</th>
          <th className="usertable_th">Email Address</th>
          <th className="usertable_th">Contact Number</th>
          <th className="usertable_th">Address</th>
          <th className="usertable_th">Action</th> 
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user._id}>
            <td className="usertable_td">{user._id}</td>
            <td className="usertable_td">{user.username}</td>
            <td className="usertable_td">{user.email}</td>
            <td className="usertable_td">{user.contactno}</td>
            <td className="usertable_td">{user.address}</td>
            <td className="usertable_td usertablebutton">
              <button className="usertable_delete" onClick={() => onDeleteUser(user._id)}>Delete</button>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default Users;


