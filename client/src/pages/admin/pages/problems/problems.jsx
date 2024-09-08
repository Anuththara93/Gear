import DataTable from "../../components/dataTable/dataTable";
import "./problems.css";
import { useState,useEffect} from "react";
import { problems } from "../../data";
import axios from "axios"

const Problems = () => {
  const [open, setOpen] = useState(false);
  const [users,setUsers]=useState([]);
  const [searchTerm, setSearchTerm] = useState('');


  const fetchUsers = async () => {
    try {
      
        const response = await axios.get(`http://localhost:3001/Contactus/contactus/`);
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
      <h1>Contact Us Form</h1>
    </div>
    <UserTable fetchUsers={fetchUsers} users={users} /> 
  </div>
  );
};


function UserTable({ users,fetchUsers }) {
 
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  const onDeleteUser = async (user) =>{
        try {
            const response = await axios.delete(`http://localhost:3001/Contactus/contactus/${user}`);
            alert('Problem Deleted')
            fetchUsers();

        }
        catch (error) {
            alert("Error Occured");

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
          <th className="usertable_th">Customer Name</th>
          <th className="usertable_th">Contact Number</th>
          <th className="usertable_th">Problem</th>
          <th className="usertable_th">Action</th> {/* Add the Action column for buttons */}
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user._id}>
            <td className="usertable_td">{user._id}</td>
            <td className="usertable_td">{user.name}</td>
            <td className="usertable_td">{user.contactno}</td>
            <td className="usertable_td">{user.problem}</td>
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
export default Problems;
