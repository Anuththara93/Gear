import "./navbar.css";
import icon1 from "../../assests/search.svg";
import icon2 from "../../assests/app.svg";
import icon3 from "../../assests/expand.svg";
import icon4 from "../../assests/notifications.svg";
import icon5 from "../../assests/settings.svg";
import adminuser from "../../assests/adminuser.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>GEAR</span>
      </div>
      <div className="icons">
        <img src={icon1} alt="" className="icon" />
        <img src={icon2} alt="" className="icon" />
        <img src={icon3} alt="" className="icon" />
        <div className="notification">
          <img src={icon4} alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src= {adminuser}
            alt=""
          />
          <span>ADMIN</span>
        </div>
        <img src={icon5} alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;