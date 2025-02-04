import React from "react";
import css from "./Works.module.css";
import Card from "./Card/Card";
import { works } from "../../data/works";
import "aos/dist/aos.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1280, min: 720 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 720, min: 320 },
    items: 1,
  },
};

const Works = () => {
  const work = works.map((item) => (
    <Card
      key={item.id}
      title={item.title}
      stack={item.stack}
      type={item.type}
      discription={item.discription}
      link={item.link}
      image={item.image}
      git={item.git}
    />
  ));

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
        autoPlay={true}
        partialVisible={false}
        autoPlaySpeed={3500}
      >
        {work}
      </Carousel>
    </div>
  );
};

export default Works;
