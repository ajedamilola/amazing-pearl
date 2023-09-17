import React from 'react'
import './job.scss'
import looking from '../../img/looking.png'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {motion} from 'framer-motion'

const Job = () => {
  return (
    <div>
        <Navbar/>
        <div className="jobimg">
            <div className="innerjobimg">
                <motion.div initial={{ y: '-50%' }} animate={{ y: '0' }} transition={{duration: 1.5, type: 'inertia'}}><img  src={looking} alt="" /></motion.div>
            </div>
        </div>
        <div className="main">
            <div className="left">
                <h5>Amazing Pearl</h5>
                <h2>Work with us</h2>
                <p>We are looking for people who are as driven as we are to improve the quality of life for those we serve. It’s an incredibly rewarding mission that our team is dedicated to achieving.
                    Owners, support staff, caregivers and more all play key roles in empowering seniors and adults with disabilities with the support they need to remain in their homes. 
                    It’s not just a bonus—in our eyes, it’s the basis of everything we do. If you’d like to help us live out our mission, join our team! <br /> <br /><br />
                    By 2050, 1.6 billion people in the world will be over age 65. That is over a billion reasons to care. Guided by our core values, we intend to help these seniors remain in their homes.
                </p>
            </div>
            <motion.div className="right" initial={{ x: '50%' }} animate={{ x: '0' }} transition={{duration: 1.5, type: 'tween'}}>
                <div className="group">
                    <h3>Open positions</h3>
                    <p>Registered nurses</p>
                    <p>Liscensed Practical Nurses</p>
                    <p>Nursing Assistants</p>
                    <p>Home Health Aides</p>
                </div>
                <div className="group">
                    <h3>Requirements</h3>
                    <p>Experience</p>
                    <p>Background check</p>
                    <p>Drug screening tests</p>
                    <p>Vaccination,physical and PPD</p>
                    <p>Legal work permit</p>
                </div>
                <div className="group">
                    <h3>Benefits</h3>
                    <p>BI-weekly pay</p>
                    <p>Flexible Hours</p>
                    <p>Full and part-time schedule</p>
                </div> 
            </motion.div>
        </div>
        <div className="apply">
            <Link to={'/job/apply'} className='button'><b>Apply Now</b></Link>
        </div>
    
        <Footer/>
    </div>
  )
}

export default Job