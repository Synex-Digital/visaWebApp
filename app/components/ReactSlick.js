"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const ReactSlick = ({ children, className }) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 576, // breakpoint for small screens (mobile phones)
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768, // breakpoint for medium-sized screens (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992, // breakpoint for large screens (desktops)
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={className}>
      {children}
    </Slider>
  );
};

export default ReactSlick;
