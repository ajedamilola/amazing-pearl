import React from 'react'
import './about.scss'
import './mobileabout.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom'
import about1 from '../../img/aboutkids1.jpg'
import about2 from '../../img/about2.jpg'
import about3 from '../../img/aboutcare1.jpg'
import about4 from '../../img/about4.jpg'
import about5 from '../../img/about5.jpg'
import about6 from '../../img/about6.jpg'
import about7 from '../../img/about7.jpg'
import about8 from '../../img/about8.jpg'
import about9 from '../../img/about9.jpg'
import img4 from '../../img/team.jpg'
import Homeclient from '../../components/homeclient/Homeclient'
import Takekids from '../../components/takekids/Takekids'
import { Button } from '@mui/material'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Takekids/>
        <section className="whole">
            <div className="wholeinner reverse">
              <div className="left">
                <Link to={'/kids'} className='headlink'>We’re changing how chidren live and play at home</Link>
                <div className="line"></div>
                <p>At Amazing Pearl, we are changing how chidren live and play at home. Our expert team of caregivers are dedicated to providing the highest level of personalized care for each child in our care.  <br /><br /> From in-home care and personal care to support with medication management and education, we are committed to helping your child live their best life. By providing quality care tailored to each child's unique needs, we are enabling them to grow, play, and thrive at home. We understand the importance of providing a safe, nurturing environment for your child, and that's why we are changing the way they live and play at home.</p>
                
              </div>
              <div className="right">
                <img src={about1} alt="" />
              </div>
            </div>
            <div className="slimline"></div>
        </section>
        <section className="whole">
            <div className="wholeinner normal">
              
              <div className="right">
                <img src={about2} alt="" />
              </div>
              <div className="left">
                <p>OUR EXPERIENCE</p>
                <Link to={'/services'} className='headlink'>The best home care combines expertise and heart.</Link>
                <div className="line"></div>
                <p>Amazing Pearl has delivered quality in-home care, supporting older adults with a wide range of needs and age-related conditions. We’ve provided over a million hours of care to families just like yours. Today, we’re the country’s leading provider of premium in-home care, offering an even broader range of care services.</p>
                
              </div>
            </div>
            <div className="slimline"></div>
        </section>
        <section className="whole">
            <div className="wholeinner reverse">
              <div className="left">
                <Link to={'/adults'} className='headlink'>Whole Care for the Whole Person</Link>
                <div className="line"></div>
                <p>On the Japanese island of Okinawa, people routinely live to be over 100 years old. Why? How are these vibrantly healthy, independent older people thriving? What’s the secret to their enduring health, wellness, and quality of life? <br /><br /> The answers form the foundation of the Balanced Care Method™, our proprietary approach to care.</p>
                
              </div>
              <div className="right">
                <img src={about3} alt="" />
              </div>
            </div>
        </section>
        <main className='about'>
            <div className="imgflex">
                <img src={about4} alt="" />
                <img src={about5} alt="" />
                <img src={about6} alt="" />
            </div>
            <div className="balanced">
                {/* The information here will be changed to a star article */}
                <h1>Caring for a Loved One With Aphasia</h1>
                <p className="line"></p>
                <p>Learn more about aphasia, the limitations it can cause, and how you can help a loved one.</p>
                <div className="links">
                    <Link className='plink' to={'/articles#featured'}><span>Learn more about the Balanced Care Method </span>  ></Link>
                    <Link className='plink' to={'/articles'}><span>See More Articles </span>  >>></Link>
                </div>
            </div>
            <div className="slimline"></div>
            <section className="homeclients">
                <h1>What our clients and their loved ones say about our exceptional care experience.</h1>
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
        </main>
        {/* the section below should invite customers to join the community */}
        <div className="about careteam">
            <div className="imgflex">
                <img src={about7} alt="" />
                <img src={about8} alt="" />
                <img src={about9} alt="" />
            </div>
            <div className="balanced">
                <h3>COMMUNITY</h3>
                <h1>Join Our Community</h1>
                <p className="line"></p>
                <p>Behind every Amazing Pearl caregiver is a dedicated Care Team providing guidance and support 24/7. Overseen by a Client Care Manager, your team will include specialists who handle everything from scheduling care visits to designing and updating your Care Plan. <br /><br />Working collaboratively and drawing on our experience, we’re able to anticipate changes in care needs, prevent avoidable issues, and enhance the overall care experience for clients and their loved ones.</p>
                <Link className='plink' to={'/join'}><Button className='readylink' variant='contained' color='warning'>Join Us</Button></Link>
            </div>
        </div>
        <section className="whole" id='caregivers'>
            <div className="wholeinner reverse">
              <div className="left">
                <h3>CAREGIVERS</h3>
                <Link to={'/care'} className='headlink'>The best care requires the best caregivers.</Link>
                <div className="line"></div>
                <p>And our standards are high. We typically hire only one caregiver out of every 25 applicants because we’re looking for the right skills and a true passion for caring. And since safety and reliability are our top priorities, all of our caregivers are employees—thoroughly vetted, background checked, trained, and managed by our team.</p>
                <Link className='plink' to={'/care'}><span>Learn more about our Caregivers </span>  ></Link>
              </div>
              <div className="right">
                <img src={img4} alt="" />
              </div>
            </div>
        </section>
        <div className="about">
            <div className="balanced">
            <Link to={'/job'} className='headlink'>Join our growing team!</Link>
                <p>And build a career with the nation’s leading provider of premium in-home care. <br /> We’re opening new possibilities for long-term aging at home. <br /><br />Working collaboratively and drawing on our experience, we’re able to anticipate changes in care needs, prevent avoidable issues, and enhance the overall care experience for clients and their loved ones.We’re always looking for dynamic people who truly care to join our corporate staff and our regional Care Teams. If you share our passion for helping older adults age joyfully in the home they love—and want to drive change in our industry, let’s talk!</p>
                <br />
                <Link className='dial' to={'/job'}>Find a caregiver job near you</Link>
            </div>
        </div>
        
        <Footer/>
    </div>
  )
}

export default About