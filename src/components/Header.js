import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="brand-text">
          <div className="brand-line">KAIZEN</div>
          <div className="brand-line">PRODUCTION</div>
          <div className="brand-line">STUDIO</div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;




{/* <div className="center-text">
          <div className="center-line .title-line1">Movie</div>
          <div className="center-line .title-line2">Production</div>
          <div className="center-line .title-line3">Studio</div>
        </div> */}
