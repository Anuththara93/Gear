import image1 from '../../assets/wepik-export-20230908190819JU2q.png'
import image2 from '../../assets/wepik-export-202309081913442gla.png'
import image3 from '../../assets/wepik-export-20230908191147Xm9M.png'
import './Aboutus.css'
import './footer.css'

export const Aboutus = () => {
    return (
        <div>
            <div>
                <img className='aboutusimg1' src={image1} />
                <div className='aboutusdiv1'>
                    <h1 className='aboutush1'>About Us</h1>
                    <p className='aboutusp'>Welcome to Gear, your ultimate destination for all things fitness and wellness! We are passionate about helping you achieve your health and fitness goals, and we believe that the right tools and equipment can make all the difference on your fitness journey.</p>
                    <p className='aboutusp'>At Gear, we have curated a wide range of top-quality fitness products and accessories to support individuals of all fitness levels. Whether you're a seasoned athlete or just starting your fitness adventure, we've got something for everyone.</p>
                </div>
                <img className='aboutusimg2' src={image2} />
                <div className='aboutusdiv2'>
                    <h1 className='aboutush1'>Our Mission</h1>
                    <p className='aboutusp'>Our mission is to inspire and empower you to lead a healthier and more active lifestyle. We understand that everyone's fitness needs are unique, which is why we offer a diverse selection of fitness gear, from home workout equipment to activewear and nutritional supplements. Our goal is to be your one-stop shop for all your fitness needs.</p>
                </div>
                <img className='aboutusimg3' src={image3} />
                <div className='aboutusdiv3'>
                    <h1 className='aboutush1'>Join the Gear Community</h1>
                    <p className='aboutusp'>We invite you to become a part of our thriving fitness community. Follow us on social media for workout tips, nutrition advice, and inspiring success stories from our customers. Share your fitness journey with us, and let us be a part of your path to a healthier you.</p>
                    <p className='aboutusp'>Thank you for choosing Gear as your fitness partner. We look forward to helping you achieve your fitness goals and supporting you every step of the way.</p>
                    <p className='aboutusp'>Start your fitness journey with us today!</p>
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
        </div >
    )
}