import { Link } from "react-router-dom"
import './Navbar.css'
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

export const Navbar = () => {

    const navigate = useNavigate();
    const [cookies, setCookies] = useCookies(["access_token"]);
    const [userName, setUserName] = useState("");

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate('/login')
        console.log(cookies);
    }
    const fetchUserName = async () => {
        try {
            const userId = window.localStorage.getItem("userID");
            console.log(userId);
            const response = await axios.get(`http://localhost:3001/Customer/customer/${userId}`);
            const { username } = response.data;
            setUserName(username);
        } catch (error) {
            console.error("Error fetching user name:", error);
        }
    }

    useEffect(() => {

        if (cookies.access_token) {
            fetchUserName();
        }
    }, [cookies.access_token]);

    return (<div className="navbar">
        <div className="navbar-left">
            <Link className="navbarlink" to={'/'}>Home</Link>
            <Link className="navbarlink" to={'/'}>Shop Now</Link>
            <Link className="navbarlink" to={'/aboutus'}>About Us</Link>
            <Link className="navbarlink" to={'/contactus'}>Contact Us</Link>
        </div>
        <div className="navbar-right">
            {!cookies.access_token ? (
                <div className="navbar-right-logout">
                    <Link className="navbarlinkbutton" to={'/login'}>Login</Link>
                    <Link className="navbarlinkbutton" to={'/register'}>Sign Up</Link>
                </div>
            ) : (

                <div className="navbar-right-logout">
                    <Link to={'/updateprofile'} className="navbar-right-logout-link">
                        <div className="profilephoto"></div>
                        <div className="welcome">{userName}</div>
                    </Link>

                    <button className="navbarlinkbutton" onClick={logout}>
                        Log Out
                    </button>
                </div>
            )
            }

        </div>


    </div >)
}
//
