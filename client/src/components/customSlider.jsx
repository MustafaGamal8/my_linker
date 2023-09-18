
import React from 'react';
import  Slider  from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const CustomSlider = ({slides,color}) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide:0,
    autoplay: true,
    arrows:false,
    cssEase: "linear",
  };

  return (
    <Slider {...settings}>

      {slides.map((slide, index) => (
        <Link to={slide.link} target='_blank' key={index} className='bg-white drop-shadow-md  p-5 rounded '>
        <h1 className='text-center text-2xl drop-shadow-lg  uppercase text-white mb-2  rounded-t' style={{background:color}}>{slide.title}</h1>
        <img src={slide.img} alt="" />

        </Link>
      ))}

    </Slider>
  );
}

export default CustomSlider;
