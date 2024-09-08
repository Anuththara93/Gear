import { useState } from 'react';
import './Register.css'
import axios from 'axios';

export const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [contactno, setContact] = useState("");
    const [address, setAdress] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const hello = await axios.post('http://localhost:3001/Customer/register', { username, email, address, contactno, password });
            alert("Registration Completed! Now login");

        }
        catch (error) {
            alert("Email Have Already Taken");

        }
    }

    return (
        <div className="registermain">
            <form onSubmit={onSubmit} className='registerform' action="onSubmit">

                <h2 className='registerformh1'>Join Now For Free</h2>

                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="username">Name</label>
                    <input className="registerforminput" required minLength={5} value={username} type="text" id="username" onChange={(event) => { setUsername(event.target.value) }} />
                </div>
                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="email">Email</label>
                    <input className="registerforminput" required minLength={5} value={email} type="email" id="email" onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="contactnumber">Contact Number</label>
                    <input className="registerforminput" required minLength={5} value={contactno} type="text" id="contactnumber" onChange={(event) => { setContact(event.target.value) }} />
                </div>
                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="dob">Address</label>
                    <input className="registerforminput" required minLength={5} value={address} type="text" id="dob" onChange={(event) => setAdress(event.target.value)} />
                </div>
                <div className='registerformgroup'>
                    <label className="registerformlabel" htmlFor="password">Password</label>
                    <input className="registerforminput" required minLength={5} value={password} type="password" id="password" onChange={(event) => { setPassword(event.target.value) }} />
                </div>
                <div className='regbutton '>
                    <button type='submit' className='registerbutton'>Register</button>
                </div>

            </form >
        </div >
    );
}