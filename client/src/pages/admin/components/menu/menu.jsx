import { Link } from "react-router-dom";
import '../menu/menu.css'
import user from '../../assests/user.svg';
import { menu } from "../../data";
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const Menu = () => {

  const navigate = useNavigate();
  const [_, setCookies] = useCookies("admin_token");
  const logout = () => {
    setCookies("admin_token", "");
    window.localStorage.removeItem("Admin");
    navigate('/admin')

}
  return (
    <div className="menu">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">Menu</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span >{listItem.title}</span>
            </Link>
          ))}
          
        </div>
        
      ))}
      <div className="listItem" >
          <img src={user} alt="" />
          <div className="listMenu" onClick={logout}>Logout</div>
          </div>
         
    </div>
  );
};

export default Menu;