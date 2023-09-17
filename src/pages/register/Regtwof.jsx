import React from 'react'
import Backnext from '../../components/backnext/Backnext'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import './register.scss'
 
const Regtwof = () => {
  return (
    <div>
        {/* register page two. Registrer details */}
        <Navbar/>
        <section className="register">
            <Numbers two='it' />
            <div className="title">
                <h2>Tell us about yourself</h2>
            </div>
            <form action="">
              <div className="info">
                  <div className="f">
                      <label htmlFor="">*Name</label><br />
                      <input type="text" />
                  </div>
                  <div className="f">
                      <label htmlFor="">*Email Address</label><br />
                      <input type='email' />
                  </div>
                  <div className="f">
                      <label htmlFor="">*How do you prefer we contact you?</label><br />
                      <input type='text' />
                  </div>
              </div>
              <div className="check">
                  <input type="checkbox" />
                  <p>*I consent to have Right at Home collect my name, phone number, email and comments.</p>
              </div>
            </form>
            <Backnext back='/register/stepone' next='/register/steptwosecond'/>
        </section>
        <Footer/>
    </div>
  )
}

export default Regtwof