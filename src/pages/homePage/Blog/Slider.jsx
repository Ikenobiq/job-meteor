import React from "react";
import Slider from "react-slick";
import blogmob from "../../../shared/images/mobile/blogmob.jpg";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 10000,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings}>
      <li>
        <img src={blogmob} alt="blog img" />
        <p>Advice to job seekers</p>
        <p>18.04.2021</p>
      </li>
      <li>
        <img src={blogmob} alt="blog img" />
        <p>Advice to job seekers</p>
        <p>18.04.2021</p>
      </li>
      <li>
        <img src={blogmob} alt="blog img" />
        <p>Advice to job seekers</p>
        <p>18.04.2021</p>
      </li>
    </Slider>
  );
};
export default SimpleSlider;
