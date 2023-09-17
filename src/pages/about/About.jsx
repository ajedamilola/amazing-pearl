import React from 'react'
import './about.scss'
import './mobileabout.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import {Link} from 'react-router-dom'
import about1 from '../../img/about1.webp'
import Homeclient from '../../components/homeclient/Homeclient'

const About = () => {
  return (
    <div>
        <Navbar/>
        <section className='kids'>
            <div className="left">
              <h1>Why take care of little Kids?</h1>
              <div className="line"></div>
              <p>Learn more about our new mission, our collective passion for caring for older adults and their families—and our vision to change how the world lives and ages at home.</p>
            </div>
        </section>
        <section className="whole">
            <div className="wholeinner reverse">
              <div className="left">
                <Link to={'/adults'} className='headlink'>We’re changing how people live and age at home</Link>
                <div className="line"></div>
                <p>By 2050, the number of people in the U.S. age 65 and over will swell to almost 90 million, about twice the current population. We’re ready to help. <br /><br /> Amazing Pearl, formerly Home Care Assistance, is passionate about helping older adults live well in their own homes as they age, improving the quality of life for our clients—and those who love them.</p>
                
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
                <img src={about1} alt="" />
              </div>
              <div className="left">
                <p>OUR EXPERIENCE</p>
                <Link to={'/adults'} className='headlink'>The best home care combines expertise and heart.</Link>
                <div className="line"></div>
                <p>For 20 years, TheKey, formerly Home Care Assistance, has delivered quality in-home care, supporting older adults with a wide range of needs and age-related conditions. We’ve provided over a million hours of care to families just like yours. Today, we’re the country’s leading provider of premium in-home care, offering an even broader range of care services.</p>
                
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
                <img src={about1} alt="" />
              </div>
            </div>
        </section>
        <main className='about'>
            <div className="imgflex">
                <img src={about1} alt="" />
                <img src={about1} alt="" />
                <img src={about1} alt="" />
            </div>
            <div className="balanced">
                {/* The information here will be changed to a star article */}
                <h1>Balanced Care Method <br /> A Science-Based, Holistic System for Aging Well</h1>
                <p className="line"></p>
                <p>The Balanced Care Method™ is a 360-degree approach that does more than support daily tasks—it emphasizes what brings meaning to a client’s life and provides whole care for the whole person. Every Care Plan we design reflects this holistic approach. And our expertly trained caregivers understand the importance of supporting each client’s passions, activities, and lifestyle, in addition to their daily care. Backed by a Care Team of specialists, the Balanced Care Method helps our clients live longer, healthier, and happier in the home they love.</p>
                <div className="links">
                    <Link className='plink' to={'/articles'}><span>Learn more about the Balanced Care Method </span>  ></Link>
                    <Link className='plink' to={'/articles'}><span>See More Articles </span>  >>></Link>
                </div>
            </div>
            <div className="slimline"></div>
            <section className="homeclients">
                <h1>What our clients and their loved ones say about our exceptional care experience.</h1>
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
        </main>
        {/* the section below should invite customers to join the community */}
        <div className="about careteam">
            <div className="imgflex">
                <img src={about1} alt="" />
                <img src={about1} alt="" />
                <img src={about1} alt="" />
            </div>
            <div className="balanced">
                <h3>CARE TEAM</h3>
                <h1>A Team-Based Care Approach</h1>
                <p className="line"></p>
                <p>Behind every TheKey caregiver is a dedicated Care Team providing guidance and support 24/7. Overseen by a Client Care Manager, your team will include specialists who handle everything from scheduling care visits to designing and updating your Care Plan. <br /><br />Working collaboratively and drawing on our experience, we’re able to anticipate changes in care needs, prevent avoidable issues, and enhance the overall care experience for clients and their loved ones.</p>
                <Link className='plink' to={'/services'}><span>Learn more about our Care Team </span>  ></Link>
            </div>
        </div>
        <section className="whole">
            <div className="wholeinner reverse">
              <div className="left">
                <h3>CAREGIVERS</h3>
                <Link to={'./adults'} className='headlink'>The best care requires the best caregivers.</Link>
                <div className="line"></div>
                <p>And our standards are high. We typically hire only one caregiver out of every 25 applicants because we’re looking for the right skills and a true passion for caring. And since safety and reliability are our top priorities, all of our caregivers are employees—thoroughly vetted, background checked, trained, and managed by our team.</p>
                <Link className='plink' to={'/services'}><span>Learn more about our Caregivers </span>  ></Link>
              </div>
              <div className="right">
                <img src={about1} alt="" />
              </div>
            </div>
        </section>
        <div className="about">
            <div className="balanced">
            <Link to={'./job'} className='headlink'>Join our growing team!</Link>
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