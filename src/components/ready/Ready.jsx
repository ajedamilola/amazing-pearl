import React from 'react'
import './ready.scss'
import {Link} from 'react-router-dom'

const Ready = () => {
  return (
    <section className="ready">
        <Link className='headlink' to={'/services'}>Ready to get the care you need?</Link>
        <p>Help us understand your care needs. Then we’ll set up a free phone consultation so you can get the right support and services to live and age successfully at home.</p>
        <Link to={'/care'} id='readylink' >Get Started</Link>
    </section>
  )
}

export default Ready