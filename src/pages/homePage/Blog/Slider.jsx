import React from "react";
import Slider from "react-slick";
import blogmob from "../../../shared/images/mobile/blogmob.jpg";
import styles from "./Slider.module.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1269,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <li className={styles.item}>
        <img className={styles.img} src={blogmob} alt="blog img" />
        <h3 className={styles.heading}>Advice to job seekers</h3>
        <p className={styles.paragraph}>18.04.2021</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={blogmob} alt="blog img" />
        <h3 className={styles.heading}>Advice to job seekers</h3>
        <p className={styles.paragraph}>18.04.2021</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={blogmob} alt="blog img" />
        <h3 className={styles.heading}>Advice to job seekers</h3>
        <p className={styles.paragraph}>18.04.2021</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={blogmob} alt="blog img" />
        <h3 className={styles.heading}>Advice to job seekers</h3>
        <p className={styles.paragraph}>18.04.2021</p>
      </li>
    </Slider>
  );
};
export default SimpleSlider;
