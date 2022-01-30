import * as React from "react";
import Slide from "react-slick";
import CustomArrow from "./CustomArrow";
import { Col } from "react-bootstrap";
import "./SliderStyle.scss";
import wordpress from "../../images/wordpress.png";
import shopify from "../../images/shopify.png";
import magento from "../../images/magento.png";
import drupal from "../../images/drupal.png";
import joomla from "../../images/joomla.png";
import bigcommerce from "../../images/bigcommerce.png";
import prestashop from "../../images/prestashop.png";
import wix from "../../images/wix.png";
import woocommerce from "../../images/woocommerce.png";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5,
  nextArrow: <CustomArrow />,
  prevArrow: <CustomArrow />,
  responsive: [
    {
      breakpoint: 772,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const icons = [
  wordpress,
  shopify,
  magento,
  drupal,
  joomla,
  bigcommerce,
  prestashop,
  wix,
  woocommerce,
];

const Slider = () => {
  return (
    <section>
      <h1 className="text-center my-5 pb-4">
        Trusted by 20,000+ businesses & compatible with over 100+ platforms
      </h1>
      <Col xs={4} sm={11} className=" m-auto">
        <Slide {...settings}>
          {icons.map((icon) => {
            return (
              <div key={icon} className="iconbox">
                <img src={icon} alt={icon} className="w-100" />
              </div>
            );
          })}
        </Slide>
      </Col>
    </section>
  );
};

export default Slider;
