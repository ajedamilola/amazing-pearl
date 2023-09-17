import React from 'react'
import Backnext from '../../components/backnext/Backnext'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Numbers from '../../components/numbers/Numbers'
import Zipform from '../../components/zipform/Zipform'
import './register.scss'

const Regthree = () => {
  return (
    <div>
      {/* register page three. Zip code */}
        <Navbar/>
        <section className="register">
            <Numbers three='it' />
            <div className="title">
                <h2>Where is Care Needed?</h2>
                <div className="zipt"><Zipform/></div>
            </div>
            <Backnext back='/register/steptwosecond' next='/' para='hide'/>
        </section>
        <Footer/>
    </div>
  )
}

export default Regthree