import React from 'react'
import './adults.scss'
import './mobileadults.scss'
import '../../scss.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import Slide from '../../components/slide/Slide'
import random from '../../img/adultpage.jpg'
import {Link} from 'react-router-dom'
import Homeclient from '../../components/homeclient/Homeclient'
import Faq from '../../components/faq/Faq'
import img2 from '../../img/care.jpg'
import img3 from '../../img/food.jpg'
import img4 from '../../img/team.jpg'
import img5 from '../../img/index5.webp'
import img6 from '../../img/index6.webp'
import img7 from '../../img/index7.webp'
import img8 from '../../img/index8.webp'
import Dropdownfaq from '../../components/dropdownfaq/Dropdownfaq'
import image1 from '../../img/img1.jpg'
import image2 from '../../img/img2.jpg'
import image3 from '../../img/img3.jpg'
import image4 from '../../img/img4.jpg'
import image5 from '../../img/img5.jpg'
import image6 from '../../img/img6.jpg'
import {motion} from 'framer-motion'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Ready from '../../components/ready/Ready'

const Adults = () => {
  return (
    <div>
        <Navbar/>
        <header>
          <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{duration: 2}} className="float df" id='grey'>
            <div className="leftcaroul">
              <motion.h1 initial={{x: -200}} animate={{ x: 0 }} transition={{duration: 2, type: 'spring'}} ><Link className="title" to={'/services'}>Elderly care, <br /> Our mission.</Link></motion.h1>
              <div className="line"></div>
              <p>Our mission is to provide adults with the care they need and deserve. Whether you're looking for in-home services, assitance with mobility, or just someone to talk to, we're here to help.</p>
              <Link to={'/services'} className="bluebtn msg">Find care</Link>
            </div>
          </motion.div>
          <div className="slide"><Slide img1={image1} img2={image2} img3={image3} img4={image4} img5={image5} img6={image6}  /></div>
        </header>
        <main>
        <section className='kids'>
            <div className="left">
              <h1>Why take care of the Elderly?</h1>
              <div className="line"></div>
              <p>Learn more about our new mission, our collective passion for caring for older adults and their families—and our vision to change how the world lives and ages at home.</p>
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
              <Link to={'/care'} className='headlink'>A Care Plan Tailored to Whole Being</Link>
              <div className="line"></div>
              <p>It starts with a focus on joy. Before beginning care, we get to know you or your loved one, as a person not a patient, learning about your favorite foods, music, hobbies, passions—the things that bring pleasure and purpose to each day—as well as your care needs. Then we design a personalized Care Plan just for you.</p>
              <ul>
                <li><TaskAltIcon className='icon'/>Assistance with daily activities</li>
                <li><TaskAltIcon className='icon'/>Help with personal care</li>
                <li><TaskAltIcon className='icon'/>Support for meaningful activities and daily engagement</li>
              </ul>
              <Link id='tailored' to={'/care'}><span>Learn More</span>  ></Link>
            </div>
          </section>
          <section className="whole">
            <div className="slimline"></div>
            <div className="inner">
              <div className="left">
                <Link to={'/arrticles'} className='headlink'>Whole Care for the Whole Person</Link>
                <div className="line"></div>
                <p>Our proprietary Balanced Care Method™ emphasizes a healthy mind, body, and spirit. This holistic approach focuses on nutrition, engagement, social connection, and overall wellness so our clients can live happier, healthier lives at home.</p>
                <div className="checks">
                  <ul>
                    <li><TaskAltIcon className='icon'/>Cognitive stimulation</li>
                    <li><TaskAltIcon className='icon'/>Physical activity</li>
                    <li><TaskAltIcon className='icon'/>Social engagement</li>
                  </ul>
                  <ul>
                    <li><TaskAltIcon className='icon'/>Nutrition</li>
                    <li><TaskAltIcon className='icon'/>Sense of calm</li>
                    <li><TaskAltIcon className='icon'/>Sufficient sleep</li>
                  </ul>
                </div>
                <Link id='tailored' to={'/articles'}><span>Learn More</span>  ></Link>
              </div>
              <div className="right">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="slimline"></div>
          </section>
          <section className="tailored">
            <div className="left">
              <img src={img4} alt="" />
            </div>
            <div className="right">
              <Link to={'/join'} className='headlink'>Team-Based Approach to Care</Link>
              <div className="line"></div>
              <p>Behind every caregiver is a full-time Care Team of in-house experts, providing oversight and guidance to our caregivers—and support to you and your family.</p>
              <Dropdownfaq/>
              <Link id='tailored' to={'/join'}><span>Join Us</span>  ></Link>
            </div>
          </section>
          <section className="caregivers">
            <div className="left">
              <h1>Our Team of Experts</h1>
              <div className="line"></div>
              <p>We start by hiring great caregivers who genuinely love caring for others. Then we give them the training, tools, and support to be even better care professionals. Every caregiver is our employee—not a contractor, expertly trained by our team and professionally managed to ensure their success and your satisfaction. Since safety is always our top priority, all of our caregivers are interviewed, thoroughly vetted for skills and experience, and background checked.</p>
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

export default Adults