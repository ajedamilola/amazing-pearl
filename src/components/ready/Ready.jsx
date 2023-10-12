import React from 'react'
import './ready.scss'
import {Link} from 'react-router-dom'

const Ready = () => {
  return (
    <section className="ready">
        <Link className='headlink' to={'/join'}>Experience high quality care with us.</Link>
        <p>We all deserve to be taken care of, and at Amazing Pearl, we are here to provide you with the best care possible. Whatever care you need, we are ready to assist you.</p>
        <Link to={'/join'} id='readylink' >Get Started</Link>
    </section>
  )
}

export default Ready