import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Left Section */}
        <div className="left-section">
          <div className="left-content">
            <div className="name-content">
              <div>
                <strong>KAIZEN</strong>
              </div>
              <div>
                <strong>PRODUCTION</strong>
              </div>
              <div>
                <strong>STUDIO</strong>
              </div>
            </div>

            <div className="address-content">
              <div>2099 Walnut,</div>
              <div>Hill Ln undefined Lafayette,</div>
              <div>California 55262</div>
            </div>
            <div className="contact-content">
              <div className="contact">+34 256-08-7002</div>
              <div>talkie@example.com</div>
            </div>

            <div className="link-content">
              <div>
                <strong>
                  <Link to="/projects">PROJECTS</Link>
                </strong>
              </div>
              <div>
                <strong>
                  <Link to="/services">SERVICES</Link>
                </strong>
              </div>
              <div>
                <strong>
                  <Link to="/about">ABOUT</Link>
                </strong>
              </div>
              <div>
                <strong>
                  <Link to="/contacts">CONTACTS</Link>
                </strong>
              </div>
              <div>
                <strong>
                  <Link to="/journal">JOURNAL</Link>
                </strong>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining Section */}
        <div className="remaining-section">
          <div className="question-section">
            <div>Have a project in mind?</div>
            <div>Let’s get to work!</div>
            <p className="chudi">
              <div>
                Are you interested in collaborating and working with us?
              </div>{' '}
              Let's make great things together.
            </p>
            <p className="contactus">
              CONTACT US NOW {'\u00A0'}
              {'\u00A0'}
              <FontAwesomeIcon icon={faPaperPlane} />
            </p>
          </div>
          <p style={{ fontSize: '46px' }}>Get on our list!</p>
          <div className="email-input-container">
            <input
              type="email"
              placeholder="Enter your email"
              className="email-input"
            />
            {'\u00A0'}
            {'\u00A0'}
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
