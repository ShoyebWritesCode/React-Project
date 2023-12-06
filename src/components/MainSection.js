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
            <div className="info-title2">All Projects</div>
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
      <div className="main-segment2">
        <div className="subsegment-container">
          <div className="main-subsegment2">
            <div className="info-box2">
              <div>
                <Link to="/projects">
                  <div className="info-title">
                    Videos that move the world forward!
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
              <div className="image-flex2">
                <Image
                  className="left-image2"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
                <Image
                  className="middle-image"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
                <Image
                  className="right-image2"
                  src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
                  alt="Description of the image"
                  fluid
                />
              </div>
            </div>
            <div className="bottom-links-container">
              <div className="bottom-text">
                <Link to="/projects">
                  <div className="info-title2">Our Story</div>
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
              <div className="bottom-text">
                <Link to="/projects">
                  <div className="info-title2">Our Projects</div>
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
              <div className="bottom-text">
                <Link to="/projects">
                  <div className="info-title2">@KAIZEN STUDIO INSTAGRAM</div>
                </Link>
              </div>
            </div>
          </div>
          <div className="main-subsegment4">
            <div className="main-subsegment1">
              <div className="segment-title">Videos that we create</div>
            </div>
            <div className="subsegment-container-video">
              <div className="main-subsegment2">
                <div className="video-type-container1">
                  <div className="video-type-box">
                    <div className="video-type-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <path
                          d="M40.115 2.49129H36.4236V1.23719C36.4236 0.557727 35.8727 0.00696951 35.1931 0.00696951C25.8135 0.00696951 26.384 -0.0459406 26.017 0.141091L21.3583 2.51524H10.5797C9.90013 2.51524 9.3492 3.06608 9.3492 3.74546V5.82635L2.2343 3.71585C1.44697 3.48206 0.653809 4.07277 0.653809 4.89529V16.0823C0.653809 16.8931 1.42909 17.4876 2.21667 17.2668L9.34912 15.2663V18.5086C9.34912 19.1881 9.90004 19.7388 10.5796 19.7388H15.5015V25.8901C15.5015 26.5696 16.0524 27.1203 16.7319 27.1203H18.4086L11.858 40.2193C11.554 40.827 11.8004 41.566 12.4082 41.8698C13.0162 42.1737 13.7552 41.9272 14.059 41.3196L21.1599 27.1203H21.6538V40.7694C21.6538 41.4489 22.2047 41.9997 22.8843 41.9997C23.5638 41.9997 24.1147 41.4488 24.1147 40.7694V27.1203H24.6087L31.7095 41.3196C31.9251 41.7508 32.3596 42 32.811 42C33.7203 42 34.3204 41.0387 33.9106 40.2193L27.3601 27.1203H29.0367C29.7163 27.1203 30.2672 26.5695 30.2672 25.8901V19.7388H35.1932C35.8728 19.7388 36.4237 19.188 36.4237 18.5086V9.87287H40.1151C40.7947 9.87287 41.3456 9.32203 41.3456 8.64264V3.72159C41.3455 3.04213 40.7947 2.49129 40.115 2.49129ZM3.11483 14.4594V6.54355L9.3492 8.39286V12.7107L3.11483 14.4594ZM27.8062 24.6598H17.9625V19.7388H27.8062V24.6598ZM33.9627 17.2783C32.9142 17.2783 12.475 17.2783 11.8101 17.2783C11.8101 16.7293 11.8101 5.51094 11.8101 4.97577C22.5298 4.97577 21.8413 5.03089 22.2126 4.84165L26.8712 2.4675H33.9627V17.2783ZM38.8846 7.41234H36.4236V4.95181H38.8846V7.41234Z"
                          fill="#0F0F0F"
                        ></path>
                        <path
                          d="M25.2633 7.41235H15.4277C14.7482 7.41235 14.1973 7.96319 14.1973 8.64258V13.6218C14.1973 14.3013 14.7482 14.852 15.4277 14.852H25.3104C25.9944 14.852 26.5473 14.2937 26.5408 13.6101L26.4937 8.63093C26.4873 7.95606 25.9382 7.41235 25.2633 7.41235ZM16.6582 12.3915V9.8728H24.0444L24.0683 12.3915H16.6582Z"
                          fill="#0F0F0F"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <Link to="/projects">
                        <div className="video-type-title">
                          Advertising for Fashion Store
                        </div>
                      </Link>
                    </div>
                    <div className="subtitle-line1 video-type-description">
                      The most trusted Studio with more than a decade of
                      experience, a leader in digital experience
                    </div>
                  </div>
                  <div className="video-type-box">
                    <div className="video-type-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <path
                          d="M40.115 2.49129H36.4236V1.23719C36.4236 0.557727 35.8727 0.00696951 35.1931 0.00696951C25.8135 0.00696951 26.384 -0.0459406 26.017 0.141091L21.3583 2.51524H10.5797C9.90013 2.51524 9.3492 3.06608 9.3492 3.74546V5.82635L2.2343 3.71585C1.44697 3.48206 0.653809 4.07277 0.653809 4.89529V16.0823C0.653809 16.8931 1.42909 17.4876 2.21667 17.2668L9.34912 15.2663V18.5086C9.34912 19.1881 9.90004 19.7388 10.5796 19.7388H15.5015V25.8901C15.5015 26.5696 16.0524 27.1203 16.7319 27.1203H18.4086L11.858 40.2193C11.554 40.827 11.8004 41.566 12.4082 41.8698C13.0162 42.1737 13.7552 41.9272 14.059 41.3196L21.1599 27.1203H21.6538V40.7694C21.6538 41.4489 22.2047 41.9997 22.8843 41.9997C23.5638 41.9997 24.1147 41.4488 24.1147 40.7694V27.1203H24.6087L31.7095 41.3196C31.9251 41.7508 32.3596 42 32.811 42C33.7203 42 34.3204 41.0387 33.9106 40.2193L27.3601 27.1203H29.0367C29.7163 27.1203 30.2672 26.5695 30.2672 25.8901V19.7388H35.1932C35.8728 19.7388 36.4237 19.188 36.4237 18.5086V9.87287H40.1151C40.7947 9.87287 41.3456 9.32203 41.3456 8.64264V3.72159C41.3455 3.04213 40.7947 2.49129 40.115 2.49129ZM3.11483 14.4594V6.54355L9.3492 8.39286V12.7107L3.11483 14.4594ZM27.8062 24.6598H17.9625V19.7388H27.8062V24.6598ZM33.9627 17.2783C32.9142 17.2783 12.475 17.2783 11.8101 17.2783C11.8101 16.7293 11.8101 5.51094 11.8101 4.97577C22.5298 4.97577 21.8413 5.03089 22.2126 4.84165L26.8712 2.4675H33.9627V17.2783ZM38.8846 7.41234H36.4236V4.95181H38.8846V7.41234Z"
                          fill="#0F0F0F"
                        ></path>
                        <path
                          d="M25.2633 7.41235H15.4277C14.7482 7.41235 14.1973 7.96319 14.1973 8.64258V13.6218C14.1973 14.3013 14.7482 14.852 15.4277 14.852H25.3104C25.9944 14.852 26.5473 14.2937 26.5408 13.6101L26.4937 8.63093C26.4873 7.95606 25.9382 7.41235 25.2633 7.41235ZM16.6582 12.3915V9.8728H24.0444L24.0683 12.3915H16.6582Z"
                          fill="#0F0F0F"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <Link to="/projects">
                        <div className="video-type-title">
                          Advertising for Fashion Store2
                        </div>
                      </Link>
                    </div>
                    <div className="subtitle-line1 video-type-description">
                      The most trusted Studio with more than a decade of
                      experience, a leader in digital experience
                    </div>
                  </div>
                </div>
                <div className="video-type-container2">
                  <div className="video-type-box">
                    <div className="video-type-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <path
                          d="M40.115 2.49129H36.4236V1.23719C36.4236 0.557727 35.8727 0.00696951 35.1931 0.00696951C25.8135 0.00696951 26.384 -0.0459406 26.017 0.141091L21.3583 2.51524H10.5797C9.90013 2.51524 9.3492 3.06608 9.3492 3.74546V5.82635L2.2343 3.71585C1.44697 3.48206 0.653809 4.07277 0.653809 4.89529V16.0823C0.653809 16.8931 1.42909 17.4876 2.21667 17.2668L9.34912 15.2663V18.5086C9.34912 19.1881 9.90004 19.7388 10.5796 19.7388H15.5015V25.8901C15.5015 26.5696 16.0524 27.1203 16.7319 27.1203H18.4086L11.858 40.2193C11.554 40.827 11.8004 41.566 12.4082 41.8698C13.0162 42.1737 13.7552 41.9272 14.059 41.3196L21.1599 27.1203H21.6538V40.7694C21.6538 41.4489 22.2047 41.9997 22.8843 41.9997C23.5638 41.9997 24.1147 41.4488 24.1147 40.7694V27.1203H24.6087L31.7095 41.3196C31.9251 41.7508 32.3596 42 32.811 42C33.7203 42 34.3204 41.0387 33.9106 40.2193L27.3601 27.1203H29.0367C29.7163 27.1203 30.2672 26.5695 30.2672 25.8901V19.7388H35.1932C35.8728 19.7388 36.4237 19.188 36.4237 18.5086V9.87287H40.1151C40.7947 9.87287 41.3456 9.32203 41.3456 8.64264V3.72159C41.3455 3.04213 40.7947 2.49129 40.115 2.49129ZM3.11483 14.4594V6.54355L9.3492 8.39286V12.7107L3.11483 14.4594ZM27.8062 24.6598H17.9625V19.7388H27.8062V24.6598ZM33.9627 17.2783C32.9142 17.2783 12.475 17.2783 11.8101 17.2783C11.8101 16.7293 11.8101 5.51094 11.8101 4.97577C22.5298 4.97577 21.8413 5.03089 22.2126 4.84165L26.8712 2.4675H33.9627V17.2783ZM38.8846 7.41234H36.4236V4.95181H38.8846V7.41234Z"
                          fill="#0F0F0F"
                        ></path>
                        <path
                          d="M25.2633 7.41235H15.4277C14.7482 7.41235 14.1973 7.96319 14.1973 8.64258V13.6218C14.1973 14.3013 14.7482 14.852 15.4277 14.852H25.3104C25.9944 14.852 26.5473 14.2937 26.5408 13.6101L26.4937 8.63093C26.4873 7.95606 25.9382 7.41235 25.2633 7.41235ZM16.6582 12.3915V9.8728H24.0444L24.0683 12.3915H16.6582Z"
                          fill="#0F0F0F"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <Link to="/projects">
                        <div className="video-type-title">
                          Advertising for Fashion Store3
                        </div>
                      </Link>
                    </div>
                    <div className="subtitle-line1 video-type-description">
                      The most trusted Studio with more than a decade of
                      experience, a leader in digital experience
                    </div>
                  </div>
                  <div className="video-type-box">
                    <div className="video-type-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="42"
                        height="42"
                        viewBox="0 0 42 42"
                        fill="none"
                      >
                        <path
                          d="M40.115 2.49129H36.4236V1.23719C36.4236 0.557727 35.8727 0.00696951 35.1931 0.00696951C25.8135 0.00696951 26.384 -0.0459406 26.017 0.141091L21.3583 2.51524H10.5797C9.90013 2.51524 9.3492 3.06608 9.3492 3.74546V5.82635L2.2343 3.71585C1.44697 3.48206 0.653809 4.07277 0.653809 4.89529V16.0823C0.653809 16.8931 1.42909 17.4876 2.21667 17.2668L9.34912 15.2663V18.5086C9.34912 19.1881 9.90004 19.7388 10.5796 19.7388H15.5015V25.8901C15.5015 26.5696 16.0524 27.1203 16.7319 27.1203H18.4086L11.858 40.2193C11.554 40.827 11.8004 41.566 12.4082 41.8698C13.0162 42.1737 13.7552 41.9272 14.059 41.3196L21.1599 27.1203H21.6538V40.7694C21.6538 41.4489 22.2047 41.9997 22.8843 41.9997C23.5638 41.9997 24.1147 41.4488 24.1147 40.7694V27.1203H24.6087L31.7095 41.3196C31.9251 41.7508 32.3596 42 32.811 42C33.7203 42 34.3204 41.0387 33.9106 40.2193L27.3601 27.1203H29.0367C29.7163 27.1203 30.2672 26.5695 30.2672 25.8901V19.7388H35.1932C35.8728 19.7388 36.4237 19.188 36.4237 18.5086V9.87287H40.1151C40.7947 9.87287 41.3456 9.32203 41.3456 8.64264V3.72159C41.3455 3.04213 40.7947 2.49129 40.115 2.49129ZM3.11483 14.4594V6.54355L9.3492 8.39286V12.7107L3.11483 14.4594ZM27.8062 24.6598H17.9625V19.7388H27.8062V24.6598ZM33.9627 17.2783C32.9142 17.2783 12.475 17.2783 11.8101 17.2783C11.8101 16.7293 11.8101 5.51094 11.8101 4.97577C22.5298 4.97577 21.8413 5.03089 22.2126 4.84165L26.8712 2.4675H33.9627V17.2783ZM38.8846 7.41234H36.4236V4.95181H38.8846V7.41234Z"
                          fill="#0F0F0F"
                        ></path>
                        <path
                          d="M25.2633 7.41235H15.4277C14.7482 7.41235 14.1973 7.96319 14.1973 8.64258V13.6218C14.1973 14.3013 14.7482 14.852 15.4277 14.852H25.3104C25.9944 14.852 26.5473 14.2937 26.5408 13.6101L26.4937 8.63093C26.4873 7.95606 25.9382 7.41235 25.2633 7.41235ZM16.6582 12.3915V9.8728H24.0444L24.0683 12.3915H16.6582Z"
                          fill="#0F0F0F"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <Link to="/projects">
                        <div className="video-type-title">
                          Advertising for Fashion Store4
                        </div>
                      </Link>
                    </div>
                    <div className="subtitle-line1 video-type-description">
                      The most trusted Studio with more than a decade of
                      experience, a leader in digital experience
                    </div>
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
          </div>
        </div>
      </div>
      <div className="main-segment3">
        <div className="container">
          <div className="main-image">
            <Image
              className="main-img"
              src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
              alt="Description of the image"
              fluid
            />
          </div>
        </div>
        <div className="content">
          <div className="segment-title">
            <h2>CREATIVE &</h2>
            <h3> INDEPENDENT</h3>
            <h4> AGENCY</h4>
          </div>
          <div className="sub-image">
            <Image
              className="sub-img"
              src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
              alt="Description of the image"
              fluid
            />
          </div>
        </div>
        <div className="description-content">
          <div className="hero-image .hero-image2">
            <Image
              className="img2"
              src="https://ld-wp73.template-help.com/wordpress/prod_31658/v1/wp-content/uploads/2021/08/img-1.jpg"
              alt="Description of the image"
              fluid
            />
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
        <div className="bottom-text center">
          <Link to="/projects">
            <div className="info-title2 white">All Projects</div>
          </Link>
          <div className="bottom-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 26 26"
              fill="none"
            >
              <path
                d="M19.7665 3.65161H0.438759V0H26V25.5612H22.3484V6.2339L2.58208 26.0002L0 23.4181L19.7665 3.65161Z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="main-bottomsegment">
        <div className="main-subsegment1">
          <div className="segment-title">Our top Clients</div>
          <div className="client-container">
            <div className="client-icons"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
