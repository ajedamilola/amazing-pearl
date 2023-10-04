import React from 'react'
import './footer.scss'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

const Footer = () => {
  return (
    <div id='footer'>
        <div className="foothat">
            <Link to={'/'} className='link' style={{display: 'flex', alignItems: 'center'}}>
                <img src={logo} alt="Amazing Pearl Logo" />
            </Link>
            <div id='footsocial'>
                <Link to={'https://www.facebook.com/profile.php?id=61551624819703'}><FontAwesomeIcon icon={faFacebookF} className='icon' /></Link>
                <Link to={'https://www.instagram.com/amazingpearlhomehealthcare/'}><FontAwesomeIcon icon={faInstagram} className='icon' /></Link>
                <Link to={'https://twitter.com/APHomeHealth'}><FontAwesomeIcon icon={faTwitter} className='icon' /></Link>
            </div>
        </div>
        <footer>
            <div className="feet">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link className='footlink' to={'/kids'}>PEDIATRIC CARE</Link></li>
                    <li><Link className='footlink' to={'/adults'}>ELDERLY CARE</Link></li>
                    <li><Link className='footlink' to={'/services'}>WHO WE SERVE</Link></li>
                    <li><Link className='footlink' to={'/about'}>WHAT WE DO</Link></li>
                </ul>
            </div>
            <div className="feet">
                <h2>Important Links</h2>
                <ul>
                    <li><Link className='footlink' to={'/join'}>JOIN US</Link></li>
                    <li><Link className='footlink' to={'/articles'}>NEWS</Link></li>
                    <li><Link className='footlink' to={'/contact'}>CONTACT US</Link></li>
                    <li><Link className='footlink' to={'/job'}>WORK WITH US</Link></li>
                </ul>
            </div>
            <div className="feet">
                <h2>Get In Touch</h2>
                <ul>
                    <li><CallIcon className='icons'/> 2405651472</li>
                    <li><CallIcon className='icons'/> 2405849454</li>
                    <li><EmailIcon className='icons'/> info@Amazingpearlhomehealth.com</li>
                    <li><LanguageIcon className='icons'/> Amazingpearlhomehealth.com</li>
                </ul>
            </div>
        </footer>
        <div className="foot">
            <h3><Link to={'/location'} className='link' >Find a Location</Link></h3>
            <br />
            <p><Link className='link'>Terms of Service</Link> | <Link className='link'>Privacy Policy</Link> | <Link className='link'>Cookies Policy</Link> | <Link className='link'>Equal Opportunity Employer</Link> | <Link className='link'>Do Not Sell or Share My Personal Information</Link> |</p>
            <br /><br />
            <p>© 2023 Amazing Pearl.</p>
        </div>
    </div>
  )
}

export default Footer