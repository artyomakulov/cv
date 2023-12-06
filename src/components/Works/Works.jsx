import React, { useEffect, useState } from "react";
import css from "./Works.module.css";
import Card from "./Card/Card";
import { works } from "../../data/works";
import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 320 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 2,
  },
};

const Works = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (currentSlide) => {
    setActiveSlide(currentSlide);
  };

  const work = works.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      stack={item.stack}
      role={item.role}
      discription={item.discription}
      link={item.link}
      image={item.image}
      git={item.git}
    />
  ));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleSlideChange((activeSlide + 1) % works.length);
    }, 1000);

    return () => clearInterval(intervalId);
  });
  return (
    <div className={css.container} id="works">
      <h2 className={css.title} data-aos="zoom-out">
        Works
      </h2>
      <Carousel
        responsive={responsive}
        // draggable={true}
        showDots={true}
        infinite={true}
        containerClass={css.carouselContainer}
        // autoPlay={true}
        autoPlaySpeed={3500}
      >
        {work}
      </Carousel>
    </div>
  );
};

export default Works;