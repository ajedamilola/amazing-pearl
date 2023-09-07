import React from 'react'
import './adults.scss'
import './mobileadults.scss'
import '../../scss.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import Slide from '../../components/slide/Slide'
import random from '../../img/random.webp'
import {Link} from 'react-router-dom'
import Homeclient from '../../components/homeclient/Homeclient'
import Faq from '../../components/faq/Faq'
import img2 from '../../img/index2.webp'
import img3 from '../../img/index3.webp'
import img4 from '../../img/index4.webp'
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

const Adults = () => {
  return (
    <div>
        <Navbar/>
        <header>
          <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{duration: 2}} className="float df" id='grey'>
            <div className="leftcaroul">
              <motion.h1 initial={{x: -200}} animate={{ x: 0 }} transition={{duration: 2, type: 'spring'}} ><Link className="title" to={'/services'}>Care for elderly.</Link></motion.h1>
              <div className="line"></div>
              <p>It’s what we do every day to help our clients live well at home. We’re TheKey, formerly Home Care Assistance, the senior care experts that families trust the most.</p>
              <Link to={'/services'} className="bluebtn msg">Find care</Link>
            </div>
          </motion.div>
          <div className="slide"><Slide img1={image1} img2={image2} img3={image3} img4={image4} img5={image5} img6={image6}  /></div>
        </header>
        <main>
          <section className='homeabout'>
            <h1>We offer more than great caregivers. We’ll be your expert guide along this journey.</h1>
            <p>Whether you need respite care, a little help at home to live independently, or 24/7 care, we can design a personalized Care Plan that meets your needs and budget. Every caregiver is expertly trained and backed by a dedicated Care Team of in-house experts. So you’ll get the care you need and the support you deserve—and always stay informed and in control.</p>
          </section>
          <img src={random} alt="" />
          <section className="ready">
            <Link className='headlink' to={'./services'}>Ready to get the care you need?</Link>
            <p>Help us understand your care needs. Then we’ll set up a free phone consultation so you can get the right support and services to live and age successfully at home.</p>
            <Link to={'./services'} id='readylink' >Get Started</Link>
          </section>
          <section className="homeclients">
            <h1>Clients trust our caregivers and our service.</h1>
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
          <section className='kids'>
            <div className="left">
              <h1>Why take care of little Kids?</h1>
              <div className="line"></div>
              <p>Learn more about our new mission, our collective passion for caring for older adults and their families—and our vision to change how the world lives and ages at home.</p>
            </div>
          </section>
          <section className="different">
            <h1>What makes Amazing Pearl different?</h1>
            <p>Quality. Our people. And we really know our business. Every care visit is backed by over 20 years of experience providing over a million hours of exceptional service to families who expect the best care for their loved ones.</p>
          </section>
          <section className="tailored">
            <div className="left">
              <img src={img2} alt="" />
            </div>
            <div className="right">
              <Link to={'./kids'} className='headlink'>A Care Plan Tailored to Kids</Link>
              <div className="line"></div>
              <p>It starts with a focus on joy. Before beginning care, we get to know you or your loved one, as a person not a patient, learning about your favorite foods, music, hobbies, passions—the things that bring pleasure and purpose to each day—as well as your care needs. Then we design a personalized Care Plan just for you.</p>
              <ul>
                <li>Assistance with daily activities</li>
                <li>Help with personal care</li>
                <li>Support for meaningful activities and daily engagement</li>
              </ul>
              <Link id='tailored' to={'./kids'}><span>Learn More</span>  ></Link>
            </div>
          </section>
          <section className="whole">
            <div className="slimline"></div>
            <div className="inner">
              <div className="left">
                <Link to={'./adults'} className='headlink'>Whole Care for the Whole Person</Link>
                <div className="line"></div>
                <p>Our proprietary Balanced Care Method™ emphasizes a healthy mind, body, and spirit. This holistic approach focuses on nutrition, engagement, social connection, and overall wellness so our clients can live happier, healthier lives at home.</p>
                <div className="checks">
                  <ul>
                    <li>Cognitive stimulation</li>
                    <li>Physical activity</li>
                    <li>Social engagement</li>
                  </ul>
                  <ul>
                    <li>Nutrition</li>
                    <li>Sense of calm</li>
                    <li>Sufficient sleep</li>
                  </ul>
                </div>
                <Link id='tailored' to={'./adults'}><span>Learn More</span>  ></Link>
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
              <Link to={'./started'} className='headlink'>Team-Based Approach to Care</Link>
              <div className="line"></div>
              <p>Behind every caregiver is a full-time Care Team of in-house experts, providing oversight and guidance to our caregivers—and support to you and your family.</p>
              <Dropdownfaq/>
              <Link id='tailored' to={'./started'}><span>Learn More</span>  ></Link>
            </div>
          </section>
          <section className="caregivers">
            <div className="left">
              <h1>Expertly Trained Caregivers</h1>
              <div className="line"></div>
              <p>We start by hiring great caregivers who genuinely love caring for others. Then we give them the training, tools, and support to be even better care professionals. Every caregiver is our employee—not a contractor, expertly trained by our team and professionally managed to ensure their success and your satisfaction. Since safety is always our top priority, all of our caregivers are interviewed, thoroughly vetted for skills and experience, and background checked.</p>
              <Link id='tailored' to={'./about'}><span>Learn More</span>  ></Link>
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