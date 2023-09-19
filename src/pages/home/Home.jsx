import React from 'react'
import './home.scss'
import './mobilehome.scss'
import '../../scss.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Carousel from '../../components/carousel/Carousel'
import Slide from '../../components/slide/Slide'
import random from '../../img/mainpage.jpg'
import {Link} from 'react-router-dom'
import Homeclient from '../../components/homeclient/Homeclient'
import Faq from '../../components/faq/Faq'
import img2 from '../../img/kid.jpg'
import img3 from '../../img/food.jpg'
import img4 from '../../img/team.jpg'
import img5 from '../../img/team1.jpg'
import img6 from '../../img/team2.jpg'
import img7 from '../../img/team3.jpg'
import img8 from '../../img/team4.jpg'
import Dropdownfaq from '../../components/dropdownfaq/Dropdownfaq'
import image1 from '../../img/img1.jpg'
import image2 from '../../img/childone.jpg'
import image3 from '../../img/img3.jpg'
import image4 from '../../img/childtwo.jpg'
import image5 from '../../img/img5.jpg'
import image6 from '../../img/childthree.jpg'
import Ready from '../../components/ready/Ready'
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const Home = () => {
  const slides = [
    { title: "Family care,", message: "Get Started", link: './services', color: "orange", words: "Our mission is to provide families with the care they need and deserve. With a team of experts, we'll help you navigate the challenges of caregiving and ensure that your loved ones receive the best possible care."},
    { title: "Elderly care,", message: "Find care", link: './adults', color: "grey", words: "Our mission is to provide adults with the care they need and deserve. Whether you're looking for in-home services, assitance with mobility, or just someone to talk to, we're here to help." },
    { title: "Kids care,", message: "Check it out", link: './kids', color: "pink", words: "Our mission is to provide comprehensive and passionate care to kids. WHether you're looking for physical therapy, assistance with cognitive development, or just someone to talk to, we're here to help."  },
  ];
  return (
    <div>
        <Navbar/>
        <header>
          <Carousel slides={slides} />
          <div className="slide"><Slide img1={image1} img2={image2} img3={image3} img4={image4} img5={image5} img6={image6}  /></div>
        </header>
        <main>
          <section className='homeabout'>
            <h1>We offer more than great caregivers. We’ll be your expert guide along this journey.</h1>
            <p>Whether you need respite care, a little help at home to live independently, or 24/7 care, we can design a personalized Care Plan that meets your needs and budget. Every caregiver is expertly trained and backed by a dedicated Care Team of in-house experts. So you’ll get the care you need and the support you deserve—and always stay informed and in control.</p>
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
          <section className='kids'>
            <div className="left">
              <h1>Invest in a better tomorrow.</h1>
              <div className="line"></div>
              <p>Little kids are the future generation, and it is our duty to provide them with a safe and nuturing environment where they can learn and grow into well rounded imdividuals.</p>
            </div>
          </section>
          <section className="different">
            <h1>What makes Amazing Pearl different?</h1>
            <p>Amazing pearl is a Residential Service Agency that aims to improve the quality of life of our clients through the delivery of amazing excellent cpmpassionate care and extraordinary services in the comfort of their homes while being recognized as an employer of first choice. Our mission is to create a compassionate and comfortable enviroment for both the adults and pediatrics entrusted in our care and foster a healthy relationship amongst them and their family.</p>
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
          <section className="whole">
            <div className="slimline"></div>
            <div className="inner">
              <div className="left">
                <Link to={'/adults'} className='headlink'>Whole Care for the Whole Person</Link>
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
                <Link id='tailored' to={'/adults'}><span>Learn More</span>  ></Link>
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
              <p>We believe there’s more to caring for people than just providing in-home assistance. For decades, families have trusted Amzing Pearl for our expert guidance and experience to help them navigate every step of the aging journey.</p>
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

export default Home