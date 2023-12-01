import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Image from "react-bootstrap/Image";

const HeroSection = () => {
  return (
    <div className="center-text">
    <div className="upper-segment">
      <div className="hero-segment1">
        <div className="hero-image .hero-image1">
          <Image
            className="img1"
            src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
            alt="Description of the image"
            fluid
          />
        </div>

        <div className="center-line .title-line1">Movie</div>
      </div>
      <div className="hero-segment2">
        <div className="center-line .title-line2">Production</div>
        <div className="hero-image .hero-image2">
          <Image
            className="img2"
            src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
            alt="Description of the image"
            fluid
          />
        </div>
      </div>
      <div className="hero-segment3">
      <div className="center-line .title-line3">Studio</div>
      </div>
      </div>
      <div className="hero-segment4">
        <div className="hero-image .hero-image3">
          <Image
            className="img3"
            src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
            alt="Description of the image"
            fluid
          />
        </div>

        <div className="subtitle-line1">The most trusted Studio with more than a decade of experience, a leader in digital experience</div>
      </div>
    </div>
  );
};

export default HeroSection;
