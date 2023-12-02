import React from "react";
import "../App.css";
import Image from "react-bootstrap/Image";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const MainSection = () => {
  return (
    <div className="main-container">
      <div className="main-segment1">
        <div className="main-subsegment1">
          <div className="segment-title">Get the best Custom made Project</div>
        </div>
        <div className="subsegment-container">
          <div className="main-subsegment2">
            <div className="main-video">
              <ReactPlayer
                height="40vh"
                width="40vw"
                controls={true}
                url="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/production-ID_5119954.mp4"
              />
            </div>
            <div className="info-box">
              <div className="info-index">/01</div>
              <div>
                <Link to="/projects">
                  <div className="info-title">
                    Advertising for Fashion Store
                  </div>
                </Link>
              </div>
              <div className="subtitle-line1 description">
                The most trusted Studio with more than a decade of experience, a
                leader in digital experience
              </div>
            </div>
          </div>
          <div className="main-subsegment3">
            <div className="image-container">
              <div className="image-flex">
                <Image
                  className="left-image"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
                <Image
                  className="right-image"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
              </div>
            </div>
          </div>
        </div>
        <div className="subsegment-container">
          <div className="main-subsegment2">
            <div className="info-box">
              <div className="info-index">/02</div>
              <div>
                <Link to="/projects">
                  <div className="info-title">Shooting for Film Story</div>
                </Link>
              </div>
              <div className="subtitle-line1 description">
                The most trusted Studio with more than a decade of experience, a
                leader in digital experience
              </div>
            </div>
            <div className="main-video">
              <ReactPlayer
                height="45vh"
                width="40vw"
                controls={true}
                url="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/production-ID_5119954.mp4"
              />
            </div>
          </div>
          <div className="main-subsegment3">
            <div className="image-container">
              <div className="image-flex">
                <Image
                  className="right-image"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
                <Image
                  className="left-image"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-text center">
          <Link to="/projects">
            <div className="info-title">All Projects</div>
          </Link>
          <div className="bottom-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M19.7665 3.65161H0.438759V0H26V25.5612H22.3484V6.2339L2.58208 26.0002L0 23.4181L19.7665 3.65161Z"
              fill="#0F0F0F"
            ></path>
          </svg>
          </div>
        </div>
      </div>
      <div className="main-bottomsegment">
      <div className="main-subsegment1">
          <div className="segment-title">Our top Clients</div>
          <div className="client-container">
            <div className="client-icons">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
