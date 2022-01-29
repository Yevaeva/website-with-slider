import * as React from "react";
import { useState } from "react";
import "../Slider/SliderStyle.scss";
import comment1 from "../../images/comment1.png";
import comment2 from "../../images/comment2.png";
import comment3 from "../../images/comment3.png";
import comment4 from "../../images/comment4.png";
import comment5 from "../../images/comment5.png";
import "./CarouselStyle.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const dataSlider = [comment1, comment2, comment3, comment4, comment5, comment1];

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(2);
  const nextSlide = () => {
    if (slideIndex !== dataSlider.length - 1) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length - 1) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length - 1);
    }
  };

  return (
    <div className="slideWrapper ">
      <div className="container-slider">
        {dataSlider.map((img, index) => {
          return (
            <div
              key={index}
              className={
                slideIndex === index + 1
                  ? "slide active-anim"
                  : slideIndex === index + 2 || slideIndex === index - 3
                  ? "slide prevsibling"
                  : "slide"
              }
            >
              <img src={img} alt="comment" />{" "}
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
