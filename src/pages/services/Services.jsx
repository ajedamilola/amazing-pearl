import React from 'react'
import './services.scss'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import Ready from '../../components/ready/Ready'
import {Link} from 'react-router-dom'
import img from '../../img/ourservices.jpg'
import Service from '../../components/service/Service'
import Helpitems from '../../components/helpitems/Helpitems'
import Kidservice from '../../components/kidservice/Kidservice'
import { useParams } from 'react-router-dom'

const Services = () => {
  let params = useParams();
  return (
    <div>
        <Navbar/>
        <section className="whole service">
            <div className="inner">
              <div className="left">
                <h3>OUR SERVICES</h3>
                <Link to={'/join'} className='headlink'>Get the care you need in the home you love.</Link>
                <div className="line"></div>
                <p>From help a few days a week to 24/7 support for more complex needs, we have an in-home care solution that’s right for you.</p>
                <Link id='tailored' to={'/join'}><span>Get Started</span>  ></Link>
              </div>
              <div className="right">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="slimline"></div>
          </section>
          <section className='ourservices'>
            <div className="about">
                <div className="balanced">
                    <h3>OUR SERVICES</h3>
                    <h1>Exceptional Care at Home for Older Adults</h1>
                    <p className="line"></p>
                    <p>First, we get to know you and your care needs, then we design a flexible Care Plan just for you. You’ll get the in-home care solution you need—and always be informed and in control.</p>
                    
                </div>
            </div>
            <div className="serviceitems">
                <Service title='Home care' words='From a few hours a day of help to 24/7 support, we will design a Care Plan to meet your specific needs. Our high-quality in-home care includes:' name='home' />
                <Service title='Memory Care at Home*' words='Our caregivers are expertly trained to support people living with any type of cognitive decline from mild memory problems to advanced dementia.' name='memory' />
                <Service title='Specialized Care' words='We support people living with specific medical conditions and unique needs, providing the best care so our clients can live safely at home.' name='specialized' />
            </div>
          </section>
          <section className='ourservices'>
            <div className="about">
                <div className="balanced">
                    <h3>OUR SERVICES</h3>
                    <h1 className='kidstitle'>Extraordinary Care at Home for Children</h1>
                    <p className="line"></p>
                    <p className='kidsx'>First, we get to know you and your care needs, then we design a flexible Care Plan just for you. You’ll get the in-home care solution you need—and always be informed and in control.</p>
                    
                </div>
            </div>
            <Kidservice params={params}/>
          </section>
          <section className="help">
            <div className="about">
                <div className="balanced">
                    <h1>We help with daily activities and much more.</h1>
                    <p className="line"></p>
                </div>
            </div>
            <Helpitems name='help'/>
          </section>
          <section className="nursing">
            <div className="about">
                <div className="balanced">
                    <h1>Concierge Nursing</h1>
                    <p className="line"></p>
                    <p>When care needs are more complex, requiring services provided by private duty nurses or other healthcare support clinicians, or if a client prefers to have concierge services above and beyond traditional home care, we’re ready to help.</p>
                </div>
            </div>
            <Helpitems name='nurse'/>
          </section>
        <Ready/>
        <Footer/>
    </div>
  )
}

export default Services