import * as React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import Bubble from "../components/Bubble/Bubble";
import About from "../components/About/About";
import Slider from "../components/Slider/Slider";
import Reviews from "../components/Reviews/Reviews";
import Navbar from "../components/Navbar/Navbar";

const IndexPage = () => {
  return (
    <main>
      <Navbar />
      <Bubble />
      <div className="wrapper">
        <About />
        <Slider />
        <Reviews />
      </div>
    </main>
  );
};

export default IndexPage;
