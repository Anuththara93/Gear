import './NavbarProfile.css'
import { Link } from "react-router-dom"

export const NavbarProfile = () => {
    return <div className="NavbarProfile">

        <Link className="NavbarProfile-button" to='/updateprofile/'>Profile</Link>
        <Link className="NavbarProfile-button" to='/updateprofile/orders'>My Orders</Link>

    </div>
}