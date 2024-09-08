import './Login.css'
import { useState, } from 'react'
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [_, setCookies] = useCookies("access_token");

    const onSubmitt = async (event) => {
        event.preventDefault();
        try {

            const response = await axios.post('http://localhost:3001/Customer/login', { email, password });
            console.log(response);
            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");
        }
        catch (error) {
            alert("Invalid E mail/Password");

        }
    }

    return (
        <div className='Login-main'>
            <form onSubmit={onSubmitt} action="onSubmit" className='login-form'>
                <h2 className='registerformh1'>Login</h2>

                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="email" type="emails">Email</label>
                    <input className="registerforminput1" required minLength={5} value={email} type="text" id="email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="password">Password</label>
                    <input className="registerforminput1" required minLength={5} value={password} type="password" id="password" onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div className='login-form-button' >
                    <button type='submit' className='registerbutton'>Login</button>
                </div>
            </form>

        </div>);
}