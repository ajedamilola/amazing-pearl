import React from 'react'
import './kids.scss'
import './mobilekids.scss'
import '../../scss.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Slide from '../../components/slide/Slide'
import random from '../../img/kidspage.jpg'
import {Link} from 'react-router-dom'
import Homeclient from '../../components/homeclient/Homeclient'
import Faq from '../../components/faq/Faq'
import img2 from '../../img/kid.jpg'
import img5 from '../../img/index5.webp'
import img6 from '../../img/index6.webp'
import img7 from '../../img/index7.webp'
import img8 from '../../img/index8.webp'
import image1 from '../../img/childone.jpg'
import image2 from '../../img/childtwo.jpg'
import image3 from '../../img/childthree.jpg'
import image4 from '../../img/childfour.jpg'
import image5 from '../../img/childfive.jpg'
import image6 from '../../img/childsix.jpg'
import {motion} from 'framer-motion'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Ready from '../../components/ready/Ready'

const Kids = () => {
  return (
    <div>
        <Navbar/>
        <header>
          <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{duration: 2}} className="float df" id='pink'>
            <div className="leftcaroul">
              <motion.h1 initial={{x: -200}} animate={{ x: 0 }} transition={{duration: 2, type: 'spring'}} ><Link className="title" to={'/services'}>Kids care, <br /> Our mission.</Link></motion.h1>
              <div className="line"></div>
              <p>Our mission is to provide comprehensive and passionate care to kids. WHether you're looking for physical therapy, assistance with cognitive development, or just someone to talk to, we're here to help.</p>
              <Link to={'/services'} className="bluebtn msg">Check it out</Link>
            </div>
          </motion.div>
          <div className="slide"><Slide img1={image1} img2={image2} img3={image3} img4={image4} img5={image5} img6={image6}  /></div>
        </header>
        <main>
          <section className='kids'>
            <div className="left">
              <h1>Invest in a better tomorrow.</h1>
              <div className="line"></div>
              <p>Little kids are the future generation, and it is our duty to provide them with a safe and nuturing environment where they can learn and grow into well rounded imdividuals.</p>
            </div>
          </section>
          <img src={random} className='img' alt="" />
          <Ready/>
          <section className="homeclients">
            <h1>Our clients' experiences.</h1>
            <p className="line"></p>
            <div className="homeclientsay">
              <Homeclient heading='Compassionate, Dedicated, and Hardworking' 
              words='The 24-hour care that your agency provided for our mom was unparalleled. She had three caregivers, each as compassionate, dedicated, and hardworking as the next. Each caregiver worked eight-hour shifts, which enabled them to stay focused and well-rested, and in turn, provide the best care possible.'
              cname='A Client’s Daughter' />
              <Homeclient heading='Loving, Professional, and Honest' 
              words='We were absolutely thrilled with your agency and caregivers. They provided care to my father who had advanced stage Lewy Body Dementia. The caregivers who provided care for my father were loving, professional, honest, skilled, patient, and kind. I worked as a medical social worker in Geriatrics for years and never came across an agency as good as yours.'
              cname='Ann W., Herndon, VA' />
              <Homeclient heading='High Quality Services'
              words='Your agency has provided quality home care to several of my clients over the years. As a geriatric care manager, I appreciate high-quality services and appropriate follow up to me as the care manager. I would recommend them time and again.'
              cname='A Client’s Son' />
            </div>
          </section>
          
          <section className="tailored">
            <div className="left">
              <img src={img2} alt="" />
            </div>
            <div className="right">
              <Link to={'/kids'} className='headlink'>A Care Plan Just For Your Child</Link>
              <div className="line"></div>
              <p>As parents, we want the best for our kids, and a care plan that meets their unique needs is crucial to archieving that. At Amazing Pearl, we understand that every child is different and needs different care. Our experts caregivers work closely with each family to develop a care plan just for their child. We are here to assist and provide the care your child deserves.</p>
              <ul>
                <li><TaskAltIcon className='icon'/>Assistance with daily activities</li>
                <li><TaskAltIcon className='icon'/>Help with personal care</li>
                <li><TaskAltIcon className='icon'/>Support for meaningful activities and daily engagement</li>
              </ul>
              <Link id='tailored' to={'/kids'}><span>Learn More</span>  ></Link>
            </div>
          </section>
          
          <section className="caregivers">
            <div className="left">
              <h1>Our Team of Experts</h1>
              <div className="line"></div>
              <p>As a parent, you want the best for your child, and our team of expert caregivers can provide it. They are trained to specialize in providing high-quality care tailored to child's unique needs. our caregivers have completed. Whether you need in-home care, personal care, or medical management, out expert team of caregivers is here to help. We understand that the care of your child is of the utmost importance and are dedicated to delivering quality care that you can trust.9</p>
              <Link id='tailored' to={'/about'}><span>Learn More</span>  ></Link>
            </div>
            <div className="right">
              <table>
                <tr>
                  <td><img src={img5} alt="" /></td>
                  <td><img src={img6} alt="" /></td>
                </tr>
                <tr>
                  <td><img src={img7} alt="" /></td>
                  <td><img src={img8} alt="" /></td>
                </tr>
              </table>
            </div>
          </section>
          <section className="faq">
            <Faq/>
          </section>
        </main>
        <Footer/>
    </div>
  )
}

export default Kids