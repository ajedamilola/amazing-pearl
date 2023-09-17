import { useState } from "react";
import React from "react";
import './carousel.scss'
import './mobilecaro.scss'
import { Avatar, backdropClasses } from '@mui/material'
import {motion} from 'framer-motion'
// import './mobiletest.scss'
import {Link} from 'react-router-dom'


const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? isLastSlide : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  

  return (
    <div className='sliderStyles'>
      <div className="df" style={{position: 'relative'}} >
          {/* style={{backgroundImage: `url(${slides[currentIndex].url})`}} */}
        <motion.div initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{duration: 2}} key={currentIndex} className="float df" id={slides[currentIndex].color} >
            <div className="leftcaroul">
              <motion.h1 initial={{x: -200}} animate={{ x: 0 }} transition={{duration: 2, type: 'spring'}} key={currentIndex} ><Link className="title" to={slides[currentIndex].link}>{slides[currentIndex].title} <br />Our mission.</Link></motion.h1>
              <div className="line"></div>
              <p>{slides[currentIndex].words}</p>
              <Link to={slides[currentIndex].link} className="bluebtn msg">{slides[currentIndex].message}</Link>
            </div>
        </motion.div>
              {currentIndex === 0 ? 
                <div className="blank mleft left"  >
                    {/* ❱ */}
                    ❰
                </div>
              :
                <div onClick={goToPrevious} className='skipArrowStyle'>
                    {/* ❱ */}
                    ❰
                </div>
              }
              {currentIndex === slides.length - 1 ? 
                <div className='blank right'>
                    ❱
                </div>
              :
                <div onClick={goToNext} className='rightArrowStyles'>
                    ❱
                </div>
              }
        </div>
    
      
    </div>
  );
};

export default Carousel;