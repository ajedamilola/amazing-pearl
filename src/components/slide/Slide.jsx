import React from 'react'
import './slider.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


// customized next arrow
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className='arrowsn'
        style={{ ...style, display: 'flex'}}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
}
  
// customized previous arrow
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <div
        className='arrowsp'
        style={{ ...style, display: 'flex'}}
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  }

  // slider settings
  var settings = {
    dots: false,
    className: "center",
    centerMode: true,
    centerPadding: '2%',
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />, 
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
};


const Slide = ({img1, img2, img3, img4, img5, img6}) => {
  return (
    <div>
        <Slider {...settings} className="slider">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </Slider>
    </div>
  )
}

export default Slide