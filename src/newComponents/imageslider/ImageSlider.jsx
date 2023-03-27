import React from "react";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";

import "./ImageSlider.css";
import { CarousalData } from "./SliderData";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = React.useState(0);
  const length = slides.length;

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="slider flex__center">
      <BsFillArrowLeftSquareFill
        className="left-arrow pointer"
        onClick={prevSlide}
      />
      <BsFillArrowRightSquareFill
        className="right-arrow pointer"
        onClick={nextSlide}
      />
      {CarousalData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide.Img} alt="offer images" className="slider-img" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
