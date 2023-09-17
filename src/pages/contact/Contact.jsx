import React, { useState } from 'react'
import './contact.scss'

import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import QueryBuilderOutlinedIcon from '@mui/icons-material/QueryBuilderOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import man from '../../img/oldmanquestion.jpg'
import contactpic from '../../img/contactpic.jpg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Contact = () => {
    const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div>
        <Navbar/>
        <section className="contactus">
            <img src={contactpic} alt="" />
            <div className="fill">
                <h2>CONTACT US</h2>
                <form action="">
                    <div className="info">
                        <div className="f">
                            <input type="text" placeholder='Enter your Name' />
                        </div>
                        <div className="f">
                            <input type='email' placeholder='Enter a valid Email Address' />
                        </div>
                        <div className="f">
                            <textarea name="" className='input' cols="20" rows="5" placeholder='Enter your Message'></textarea>
                        </div>
                    </div>
                    <div className="contactsubmit"><h4 onClick={() => toggleTab(1)} className='button'>Submit</h4></div>
                    <div className="doingscheck"><span className={toggleState === 1 ? "show" : "check"} >Thank You for contacting us. Our team will respond to you shortly.</span></div>
                </form>
            </div>
            <div className="details">
                <div className="inner">
                    <div className="dicon"><PhoneOutlinedIcon className='icons'/> <h3>CALL US</h3></div>
                    <p>12409357172</p>
                </div>
                <div className="inner">
                    <div className="dicon"><PublicOutlinedIcon className='icons'/> <h3>LOCATION</h3></div>
                    <p>www.netlify.amazing-pearls.app</p>
                </div>
                <div className="inner">
                    <div className="dicon"><QueryBuilderOutlinedIcon className='icons'/> <h3>BUSINESS HOURS</h3></div>
                    <p>Mon - Fri ... 10am - 8pm, Sat - Sun ... Closed</p>
                </div>
            </div>
        </section>
        <section className="findus">
            <h2>FIND US</h2>
            <div className="line"></div>
            {/* something about why we should contact amazing pearls. */}
            <p id='findp' >We align leaders around a shared purpose and strategic story that catalyzes their business and brand to take action.</p>
            <div className="split">
                <div className="left"><img src={man} alt="" /></div>
                <div className="right">
                    <div className="part">
                        <h2>FOLLOW US</h2>
                        <p id='followp' >Follow us to see more of what we do, help or join the team.</p>
                        <div className="soical">
                            <Link><FontAwesomeIcon icon={faFacebookF} className='icon' /></Link>
                            <Link><FontAwesomeIcon icon={faInstagram} className='icon' /></Link>
                            <Link><FontAwesomeIcon icon={faLinkedinIn} className='icon' /></Link>
                            <Link><FontAwesomeIcon icon={faTwitter} className='icon' /></Link>
                        </div>
                    </div>
                    <div className="part">
                        <EmailOutlinedIcon className='icons'/>
                        <h2>EMAIL:</h2>
                        <p>info@Amazingpearlhomehealth.com</p>
                    </div>
                    <div className="part">
                        <PhoneOutlinedIcon className='icons'/>
                        <h2>TOLL FREE:</h2>
                        <p>+12409357172 <br /><br /></p>
                    </div>
                    <div className="part">
                        <PublicOutlinedIcon className='icons'/>
                        <h2>ADDRESS:</h2>
                        <p>www.netlify.amazing-pearl.app</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Contact