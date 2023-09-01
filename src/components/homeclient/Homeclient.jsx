import React from 'react'
import './homeclient.scss'

const Homeclient = ({heading, words, cname}) => {
  return (
    <div className='homeclient'>
        <h2>{heading}</h2>
        <p>"{words}"</p>
        <h4>{cname}</h4>
    </div>
  )
}

export default Homeclient