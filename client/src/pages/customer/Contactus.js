import './Contactus.css'
import image from '../../assets/contactus02.jpg';
import { useState } from 'react';
import axios from 'axios';
import './footer.css'
export const Contactus = () => {

    const [name, setname] = useState("");
    const [contactno, setContactNo] = useState("");
    const [problem, setProblem] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            console.log(name, contactno, problem)
            const hello = await axios.post('http://localhost:3001/Contactus/register', { name, contactno, problem });
            alert("Your FeedBack is Submited");

        }
        catch (error) {
            alert("Email Have Already Taken");

        }
    }

    return (
        <div>
            <div>
                <img className='contactusimg' src={image} />
                <div className='contactusdiv'>
                    <h1 className='contactush1'>Contact Us</h1>
                    <form className='contactusform' onSubmit={onSubmit}>
                        <label className='contactusl'>Name : </label><br />
                        <input className='contactusi' type='text' required onChange={(event) => { setname(event.target.value) }}></input><br />
                        <label className='contactusl'>Contact No. : </label><br />
                        <input className='contactusi' type='text' required onChange={(event) => { setContactNo(event.target.value) }}></input><br />
                        <label className='contactusl'>Problem : </label><br />
                        <textarea className='contactusta' onChange={(event) => { setProblem(event.target.value) }} required></textarea><br />
                        <input className='contactuss' type='submit' value='Submit' />
                    </form>
                </div>
            </div>
            <div className='footerr'>
                <div className='footermain'>
                    <div className='footerdiv'>
                        <h2 className='footerh2'>Main Links</h2>
                        <ul className='footerul'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Products</li>
                        </ul>
                    </div>
                    <div className='footerdiv'>
                        <h2 className='footerh2cd'>Contact Details</h2>
                        <div className='divl'>
                            <div className='footeri'><p>+94766516238</p></div>
                            <div className='footeri'><p>contact@gear.com</p></div>
                        </div>
                    </div>
                    <div className='footerdiv'>
                        <h2 className='footerh2'>Stores</h2>
                        <ul className='footerul'>
                            <li>Gampaha</li>
                            <li>Colombo 5</li>
                            <li>Galle</li>
                        </ul>
                    </div>
                </div>
                <div className='footerc'>
                    <p>Copyright © 2023 GEAR</p>
                </div>
            </div>
        </div>
    )
}