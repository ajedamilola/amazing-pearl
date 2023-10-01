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
import img5 from '../../img/team1.jpg'
import img6 from '../../img/team2.jpg'
import img7 from '../../img/team3.jpg'
import img8 from '../../img/team4.jpg'
import image1 from '../../img/childone.jpg'
import image2 from '../../img/childbg2.jpg'
import image3 from '../../img/childthree2.jpg'
import image4 from '../../img/childfour2.jpg'
import image5 from '../../img/childfive.jpg'
import image6 from '../../img/childsix.jpg'
import {motion} from 'framer-motion'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Ready from '../../components/ready/Ready'
import service1 from '../../img/service-1.png'
import service2 from '../../img/service-2.png'
import service4 from '../../img/service-4.png'
import service5 from '../../img/service-5.png'
import service6 from '../../img/service-6.png'
import Takekids from '../../components/takekids/Takekids'

const Kids = () => {
  return (
    <div id='kidspage'>
        <Navbar/>
        <header>
          <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{duration: 2}} className="float df" id='pink'>
            <div className="leftcaroul">
              <motion.h1 initial={{x: -200}} animate={{ x: 0 }} transition={{duration: 2, type: 'spring'}} ><Link className="title" to={'/services'}>Kids care, <br /> Our mission.</Link></motion.h1>
              <div className="line"></div>
              <p>Our mission is to provide comprehensive and passionate care to children. Whether you're looking for physical therapy, assistance with cognitive development, or just someone to talk to, we're here to help.</p>
              <Link to={'/services'} className="bluebtn msg">Check it out</Link>
            </div>
          </motion.div>
          <div className="slide kidslide"><Slide img1={image1} img2={image2} img3={image3} img4={image4} img5={image5} img6={image6}  /></div>
        </header>
        <main>
          <Takekids/>
          <img src={random} className='img' alt="" />
          <div className="kidready">
            <Ready/>
          </div>
          <section className="kidhomeclients">
            <h1>Our clients' experiences.</h1>
            <p className="line"></p>
            <div className="homeclientsay">
              <Homeclient heading='Compassionate, Dedicated, and Hardworking' 
              words="You are very friendly and very thorough, and you go above and beyond expectations.  You don't complain and always ready and willing to meet my needs. You make me feel good and make me laugh always. You are really nice and easy going. Very efficient at what you do."
              cname='Ms Tye Mobley' />
              <Homeclient heading='Loving, Professional, and Honest' 
              words='We were absolutely thrilled with your agency and caregivers. They provided care to my father who had advanced stage Lewy Body Dementia. The caregivers who provided care for my father were loving, professional, honest, skilled, patient, and kind. I worked as a medical social worker in Geriatrics for years and never came across an agency as good as yours.'
              cname='Mr Ashar' />
              <Homeclient heading='High Quality Services'
              words='Your agency has provided quality home care to several of my clients over the years. As a geriatric care manager, I appreciate high-quality services and appropriate follow up to me as the care manager. I would recommend them time and again.'
              cname='A Cherished Client' />
            </div>
          </section>
          
          <section className="kidtailored">
            <div className="left">
              <img src={img2} alt="" />
            </div>
            <div className="right">
              <Link to={'/about'} className='headlink'>A Care Plan Just For Your Child</Link>
              <div className="line"></div>
              <p>As parents, we want the best for our children, and a care plan that meets their unique needs is crucial to archieving that. At Amazing Pearl, we understand that every child is different and needs different care. Our experts caregivers work closely with each family to develop a care plan just for their child. We are here to assist and provide the care your child deserves.</p>
              <ul>
                <li><TaskAltIcon className='icon'/>Assistance with daily activities</li>
                <li><TaskAltIcon className='icon'/>Help with personal care</li>
                <li><TaskAltIcon className='icon'/>Support for meaningful activities and daily engagement</li>
              </ul>
              <Link id='tailored' to={'/about'}><span>Learn More</span>  ></Link>
            </div>
          </section>

          <section className="kidservices">
            <h1>Our Services</h1>
            <p>Amazing Pearl provides a one stop solution to your pediatric home care needs. Our comprehensive suite of services and our dedicated staff ensure that our beneficiaries and their families receive the highest quality pediatric care and supports. We love what we do and always here to serve you.</p>
            <div className="offers">
              <Link to={'/services/0'}>
                <img src={service1} alt="" />
                <h2>HOME HEALTH AIDE SERVICES</h2>
              </Link>
              <Link to={'/services/1'}>
                <img src={service2} alt="" />
                <h2>INTRAVENOUS THERAPY</h2>
              </Link>
              <Link to={'/services/2'}>
                <img src={service4} alt="" />
                <h2>PERSONAL CARE AIDE</h2>
              </Link>
              <Link to={'/services/3'}>
                <img src={service5} alt="" />
                <h2>PHYSICAL THERAPY</h2>
              </Link>
              <Link to={'/services/4'}>
                <img src={service6} alt="" />
                <h2>SKILLED NURSING SERVICES</h2>
              </Link>
            </div>
          </section>
          
          <section className="kidcaregivers">
            <div className="left">
              <h1>Our Team of Experts</h1>
              <div className="line"></div>
              <p>As a parent, you want the best for your child, and our team of expert caregivers can provide it. They are trained to specialize in providing high-quality care tailored to child's unique needs. our caregivers have completed. Whether you need in-home care, personal care, or medical management, out expert team of caregivers is here to help. We understand that the care of your child is of the utmost importance and are dedicated to delivering quality care that you can trust.</p>
              
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