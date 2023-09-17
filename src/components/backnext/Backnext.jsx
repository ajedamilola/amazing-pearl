import React from 'react'
import { Link } from 'react-router-dom'
import './backnext.scss'

const Backnext = ({para, back, next}) => {
  return (
    // buttons for register pages
    <div className='backnext'>
        <div className="inner">
            <Link to={back}><button className="button" id='button'>Back</button></Link>
            <Link to={next}><button className="button">Next</button></Link>
        </div>
        <p id={para}>(* Indicates a required field)</p>
    </div>
  )
}

export default Backnext