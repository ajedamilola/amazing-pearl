import React from 'react'
import './findcare.scss'
import {Link} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import img3 from '../../img/food.jpg'
import Footer from '../../components/footer/Footer'
import Zipform from '../../components/zipform/Zipform'

const Findcare = () => {
  return (
    <div>
        <Navbar/>
        <section className="whole">
            <div className="slimline"></div>
            <div className="inner">
              <div className="left">
                <h3>FIND A LOCATION</h3>
                <h1>Let’s find your Care Team.</h1>
                <div className="line"></div>
                <p>Enter the location where you need care.</p>
                <div className="carezip"><Zipform/></div>
              </div>
              <div className="right">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="slimline"></div>
          </section>
        <Footer/>
    </div>
  )
}

export default Findcare