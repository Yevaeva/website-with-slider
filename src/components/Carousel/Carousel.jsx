import * as React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Slider/SliderStyle.scss";
import "./CarouselStyle.scss";
import comment1 from "../../images/comment1.png";
import comment2 from "../../images/comment2.png";
import comment3 from "../../images/comment3.png";
import comment4 from "../../images/comment4.png";
import comment5 from "../../images/comment5.png";
import comment6 from "../../images/comment6.png";

const dataSlider = [comment1, comment2, comment3, comment4, comment5, comment6];

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(2);
  const [nextSlideIndex, setNextSlideIndex] = useState(null);

  useEffect(() => {
    const timeout = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearTimeout(timeout);
  });

  const nextSlide = () => {
    setSlideIndex(slideIndex + 1);
    setNextSlideIndex(null);
    if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
      setNextSlideIndex(2);
    }
    if (slideIndex === dataSlider.length - 1) {
      setNextSlideIndex(1);
    }
  };

  const prevSlide = () => {
    setSlideIndex(slideIndex - 1);
    setNextSlideIndex(null);
    if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
      setNextSlideIndex(1);
    }
    if (slideIndex === 2) {
      setNextSlideIndex(2);
    }
  };

  return (
    <div className="slideWrapper ">
      <div className="container-slider">
        {dataSlider.map((img, index, arr) => {
          return (
            <div
              key={index}
              className={
                slideIndex === index + 1
                  ? "slide active-anim"
                  : slideIndex === index + 2 ||
                    (nextSlideIndex === 2 && index === arr.length - 1)
                  ? "slide prevsibling"
                  : (nextSlideIndex === 1 && index === 0) ||
                    slideIndex === index
                  ? "slide nextsibling"
                  : "slide"
              }
            >
              <img src={img} alt="comment" />
            </div>
          );
        })}
        <button onClick={nextSlide} className="btn-slide next">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
        <button onClick={prevSlide} className="btn-slide prev">
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
