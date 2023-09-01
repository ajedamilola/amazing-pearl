import React from 'react'
import './footer.scss'
import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="foothat">
            <Link to={'/'} className='link' style={{display: 'flex', alignItems: 'center'}}>
                <img src={logo} alt="Amazing Pearl Logo" />
                <h2>Amazing Pearl</h2>
            </Link>
            <div id='footsocial'>
                <Link><FontAwesomeIcon icon={faFacebookF} className='icon' /></Link>
                <Link><FontAwesomeIcon icon={faLinkedinIn} className='icon' /></Link>
                <Link><FontAwesomeIcon icon={faTwitter} className='icon' /></Link>
            </div>
        </div>
        <footer>
            <div className="footstarted">
                <Link to={'/started'} className='link'><h4>Getting Started</h4></Link>
                <ul>
                    <li className='footlink'><Link to={'/started'} className='link'><p>Get the care you need</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>What is home care?</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>When is home care helpful</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>How does home care work?</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>How much does home care cost?</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>Understanding your options</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>Ready to get started</p></Link></li>
                    <li className='footlink'><Link to={'/started'} className='link'><p>FAQs</p></Link></li>
                </ul>
            </div>
            <div className="footservice">
                <Link to={'/services'} className='link'><h4>Services</h4></Link>
                <ul>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Home Care</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Memory Care at Home</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Geriatric Care Management</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Specialized Care</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Alzheimer’s and Dementia</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Parkinson’s</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Heart Health</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Cancer</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>Hospital to Home</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>After a Stroke</p></Link></li>
                    <li className='footlink'><Link to={'/services'} className='link'><p>End-of-Life Care</p></Link></li>
                </ul>
            </div>
            <div className="footlearn">
                <Link to={'/learning'} className='link'><h4>Learning</h4></Link>
                <ul>
                    <li className='footlink'><Link to={'/learning'} className='link'><p>Learning For Families</p></Link></li>
                    <li className='footlink'><Link to={'/learning'} className='link'><p>Learning for Professionals</p></Link></li>
                </ul>
            </div>
            <div className="footcareer">
                <Link to={'/careers'} className='link'><h4>Careers</h4></Link>
                <ul>
                    <li className='footlink'><Link to={'/careers'} className='link'><p>Caregivers</p></Link></li>
                    <li className='footlink'><Link to={'/careers'} className='link'><p>Corporate and Field Offices</p></Link></li>
                </ul>
            </div>
            <div className="footabout">
                <Link to={'/about'} className='link'><h4>About Us</h4></Link>
                <ul>
                    <li className='footlink'><Link to={'/about'} className='link'><p>Our Approach</p></Link></li>
                    <li className='footlink'><Link to={'/about'} className='link'><p>Caregivers</p></Link></li>
                    <li className='footlink'><Link to={'/about'} className='link'><p>Care Team</p></Link></li>
                    <li className='footlink'><Link to={'/about'} className='link'><p>Leadership</p></Link></li>
                    <li className='footlink'><Link to={'/about'} className='link'><p>Referral Partners</p></Link></li>
                    <li className='footlink'><Link to={'/about'} className='link'><p>Press</p></Link></li>
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