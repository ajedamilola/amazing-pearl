import React from 'react'
import './numbers.scss'

const Numbers = ({one, two, three}) => {
  return (
    <div id='numbers'>
      {/* register page header numbers */}
        <h1 id={one}>1</h1>
        <h1 id={two}>2</h1>
        <h1 id={three}>3</h1>
    </div>
  )
}

export default Numbers