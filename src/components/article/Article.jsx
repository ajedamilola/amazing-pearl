import React from 'react'
import './article.scss'

const Article = ({img, title, words}) => {
  return (
    <div className='lart'>
      {/* articles section extension */}
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{words}</p>
    </div>
  )
}

export default Article