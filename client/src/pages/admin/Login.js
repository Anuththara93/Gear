import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';

export const AdminLogin = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies("admin_token");
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();
        console.log(username, password);
        try {
            const response = await axios.post('http://localhost:3001/Admin/login', { username, password });
            setCookies("admin_token", response.data.token);
            window.localStorage.setItem("Admin", response.data.userID);
            navigate("/adminlogged");
        }
        catch (error) {
            alert("Invalid E mail/Password");

        }
    }

    return <div className='AdminLogin'>
        <form onSubmit={onSubmit} action='onSubmit' className='AdminLoginForm'>

            <h1 className='AdminLoginh1'>ADMIN LOGIN</h1>

            <div className='registerformgroupAdmin'>
                <label className="registerformlabel" htmlFor="email" type="emails">Username</label>
                <input className="registerforminput1" required minLength={5} value={username} type="text" id="email" onChange={(event) => { setUsername(event.target.value) }} />
            </div>
            <div className='registerformgroupAdmin'>
                <label className="registerformlabel" htmlFor="password">Password</label>
                <input className="registerforminput1" required minLength={5} value={password} type="password" id="password" onChange={(event) => { setPassword(event.target.value) }} />
            </div>
            <div className='login-form-button' >
                <button type='submit' className='registerbutton'>Login</button>
            </div>

        </form>
    </div >
}