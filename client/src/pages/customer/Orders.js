import { Link } from 'react-router-dom';
import './Order.css'

export const Orders = () => {
    const a = false;
    return <div className='Order-main'>
        {a ? (
            <div >

            </div>)

            :
            (<div className='Order-main-norders'>
                <div className="Order-main-norders-right">
                    <h1>Your Have No Orders</h1>
                    <div className='login-form-button' >
                        <Link to="/" type='submit' className='registerbutton'>Shop Now</Link>
                    </div>
                </div>
            </div>)}
    </div>
}