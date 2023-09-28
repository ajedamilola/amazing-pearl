import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import ellipse1 from '../../img/Ellipse1.png'
import ellipse2 from '../../img/Ellipse2.png'
import ellipse5 from '../../img/Ellipse5.png'
import {motion} from 'framer-motion'
import './sign.scss'

const Sign = () => {
  return (
    <div id='signpg'>
        <Navbar/>
        <img id='b1' src={ellipse1} alt="" />
        <img id='b2' src={ellipse2} alt="" />
        <motion.div id='b6' initial={{ x: '50%' }} animate={{ x: '0' }} transition={{duration: 1.5, type: 'spring'}}  ><img src={ellipse5} alt="" /></motion.div>
        <img id='b5' src={ellipse2} alt="" />
        <section className='signpg'>
            <h1>Join to find <span>Care.</span> </h1> 
            <div className="signup">
                <form action="">
                    <div className="details">
                        <label htmlFor="">First Name*:</label><br />
                        <input type="text" />
                    </div>
                    <div className="details">
                        <label htmlFor="">Last Name*:</label><br />
                        <input type="text" />
                    </div>
                    <div className="details">
                        <label htmlFor="">Email*:</label><br />
                        <input type="email" />
                    </div>
                    <div className="details">
                        <label htmlFor="">Phone Number*:</label><br />
                        <input type="tel" />
                    </div>
                    <div className="details">
                        <label htmlFor="" >Password*:</label><br />
                        <input type="password" />
                    </div>
                    <Link to={'/register/stepone'} ><input id='reg' type="submit" value='Register' /></Link>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Sign