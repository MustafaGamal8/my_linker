import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as  FaIcons from "react-icons/fa"
import { Link } from 'react-router-dom';

const SocialSlider = ({slides ,color}) => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide:0,
    autoplay: true,
    arrows: false,
    cssEase: "linear"
  };

  const getIcon = (slide) => {
    const iconName = `Fa${slide.site.charAt(0).toUpperCase() + slide.site.slice(1)}`;
    if (FaIcons[iconName]) {
      return FaIcons[iconName]();
    } else {
      // Replace 'YourFallbackIcon' with the specific icon component you want to display
      return <FaIcons.FaLink />;
    }
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div
          key={index}
          >
          <div   className={`w-full h-full flex items-center justify-center p-4`}>
            <Link to={slide.link} target='_blank' className={` h-16 w-16   cursor-pointer  bg-white drop-shadow-lg   rounded-full flex items-center justify-center text-2xl  hover:scale-90`} style={{color}}>
            {getIcon(slide)}
            </Link>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SocialSlider;



