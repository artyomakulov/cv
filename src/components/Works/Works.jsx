// Works.js

import React from "react";
import css from "./Works.module.css";
import Card from "./Card/Card";
import { works } from "../../data/works";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1440 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1440, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 320 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 320, min: 0 },
    items: 1,
  },
};

const Works = () => {
  const work = works.map((item) => (
    <Card
      title={item.title}
      stack={item.stack}
      role={item.role}
      discription={item.discription}
      link={item.link}
      image={item.image}
    />
  ));

  return (
    <div className={css.container}>
      <h2 className={css.title}>Works</h2>
      <Carousel
        responsive={responsive}
        showDots={true}
        infinite={true}
        containerClass={css.carouselContainer}
      >{work}
      </Carousel>
    </div>
  );
};

export default Works;
