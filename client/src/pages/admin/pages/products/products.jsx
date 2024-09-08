import { useState,useEffect } from "react";
import "./products.css";
import DataTable from "../../components/dataTable/dataTable";
import AddI from "../../components/add/add_items";
import { products } from "../../data";
import axios from "axios"
import UpdateI from "../../components/update/update_item";
import { heIL } from "@mui/x-data-grid";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [users,setUsers]=useState([]);
  const [userid,setuserid]=useState("");
  const [update,setUpdate]=useState(false);

  
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
    <div className="users usersproducts">
     
    <div className="info">
      <button className="worker_addbutton" onClick={() => setOpen(true)}>Add Products</button>
      <h1>Products</h1>
    </div>
    <UserTable fetchUsers={fetchUsers} users={users}  setUpdate={setUpdate} setuserID={setuserid} /> 
    {update && <UpdateI slug="worker"  setUpdate={setUpdate} fetchuser={fetchUsers} userid={userid} />}
    {open && <AddI slug="worker"  setOpen={setOpen} fetchuser={fetchUsers}/>}
  </div>
  );
};

function UserTable({ users,fetchUsers,setUpdate,setuserID }) {

 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  
  const filteredUsers = users.filter((user) =>
    user.title.toLowerCase().includes(searchTerm)
  );

  const onDeleteUser = async (user) =>{
        try {
            const response = await axios.delete(`http://localhost:3001/Products/products/${user}`);
            alert('Product Deleted')
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
    const get=(src)=>{
      const a =`./${src}`;
      return  a;
    }

  return (
    <div className="usertable">
    <input
      type="text"
      placeholder="Search for products..."
      value={searchTerm}
      onChange={handleSearch}
      className="usertable_search"
    />
    <table>
      <thead>
        <tr>
          <th className="usertable_th">ID</th>
          <th className="usertable_th">Title</th>
          <th className="usertable_th">Image URL</th>
          <th className="usertable_th">Image</th>
          <th className="usertable_th">No in Stock</th>
          <th className="usertable_th">Category</th>
          <th className="usertable_th">Item Cost</th>
          <th className="usertable_th">Action</th> {/* Add the Action column for buttons */}
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => {
         
         return(
          <tr key={user._id}>
            <td className="usertable_td">{user._id}</td>
            <td className="usertable_td">{user.title}</td>
            <td className="usertable_td">{user.imageurl}</td>
            <td className="usertable_td usertable_td_img"><img src={require(`../../assests/Products/${user.imageurl}`)} alt="sdsd" width="75px" height="75px"/></td>
            <td className="usertable_td">{user.noinstock}</td>
            <td className="usertable_td">{user.category}</td>
            <td className="usertable_td">{user.itemcost}</td>
            <td className="usertable_td usertablebutton ">
             
              <button className="usertable_delete" onClick={() => onDeleteUser(user._id)}>Delete</button>
              <button className="usertable_update" onClick={() => onUpdateUser(user._id)}>Update</button>
            </td>
          </tr>);
        
         })}
      </tbody>
    </table>
  </div>
  );
}


/*<img src={require('../../assests/Products/adjustabledecline.png')} alt="" />*/
export default Products;