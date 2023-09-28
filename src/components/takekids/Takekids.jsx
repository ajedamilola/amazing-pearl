import React from 'react'
import './takekids.scss'
import {DefaultPlayer as Video} from 'react-html5video'

const Takekids = () => {
  return (
    <section className='kids'>
        <div className="left">
            <h1>Invest in a better tomorrow.</h1>
            <div className="line"></div>
            <p>Children are the future generation, and it is our duty to provide them with a safe and nuturing environment where they can learn and grow into well rounded individuals.</p>
        </div>
        <div className="right">
          <Video autoplay loop >
            <source src='https://www.youtube.com/watch?v=ZAt8t8NWcWU' type='video/webm' />
          </Video>
        </div>
    </section>
  )
}

export default Takekids