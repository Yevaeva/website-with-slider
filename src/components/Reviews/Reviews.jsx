import * as React from "react";
import review1 from "../../images/review1.svg";
import review2 from "../../images/review2.svg";
import review3 from "../../images/review3.svg";
import review4 from "../../images/review4.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import "./ReviewsStyle.scss";
import Carousel from "../Carousel/Carousel";

const reviews = [
  {
    rating: "4.8/5",
    img: review1,
  },
  {
    rating: "4.8/5",
    img: review2,
  },
  {
    rating: "4.9/5",
    img: review3,
  },
  {
    rating: "4.9/5",
    img: review4,
  },
];

function Reviews() {
  return (
    <Row className="my-5 py-5">
      <Col sm={12} lg={5} className="d-flex flex-wrap mb-sm-5 reviewCont">
        {reviews.map((review, i) => {
          return (
            <Col key={i} sm={6} xs={12} className="singleReview">
              <div className="review m-auto m-lg-0">
                <div className="mb-2">
                  <img src={review.img} alt="review" />
                  <span className="fw-bold p-1">{review.rating}</span>
                </div>
                <div className="icons">
                  <FontAwesomeIcon icon={faStar} color="orange" size="lg" />
                  <FontAwesomeIcon icon={faStar} color="orange" size="lg" />
                  <FontAwesomeIcon icon={faStar} color="orange" size="lg" />
                  <FontAwesomeIcon icon={faStar} color="orange" size="lg" />
                  <FontAwesomeIcon icon={faStar} color="orange" size="lg" />
                </div>
              </div>
            </Col>
          );
        })}
      </Col>
      <Col sm={12} lg={7}>
        <Carousel />
      </Col>
    </Row>
  );
}

export default Reviews;
