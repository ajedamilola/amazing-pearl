import React from 'react'
import Backnext from '../../components/backnext/Backnext'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import './register.scss'

const Regtwos = () => {
  return (
    <div>
        {/* register page two. Applicant details. P.S don't see why there are two forms for registrer details */}
        <Navbar/>
        <section className="register">
            <Numbers two='it' />
            <div className="title">
                <h2>Tell us about the person receiving care</h2>
            </div>
            <form action="">
              <div className="info">
                  <div className="f">
                      <label htmlFor="">*Name</label><br />
                      <input type="text" />
                  </div>
                  <div className="f">
                      <label htmlFor="">*When do they need care?</label><br />
                      <input type='text' />
                  </div>
              </div>
            </form><br /><br />
            <div className="title">
                <h2>How do we contact you?</h2>
            </div>
            <form action="">
              <div className="info">
                  <div className="f">
                      <label htmlFor="">*First Name</label><br />
                      <input type="text" />
                  </div>
                  <div className="f">
                      <label htmlFor="">*Last Name</label><br />
                      <input type="text" />
                  </div>
                  <div className="f">
                      <label htmlFor="">*Phone Nnumber</label><br />
                      <input type="tel" />
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
            <Backnext back='/register/steptwofirst' next='/register/stepthree'/>
        </section>
        <Footer/>
    </div>
  )
}

export default Regtwos