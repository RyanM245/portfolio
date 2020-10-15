import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-links">
        <a href="https://github.com/RyanM245" className="fab fa-github"><span className="footer-link">GitHub</span></a>
        <a href="http://www.linkedin.com/in/ryan-milne-744200141" className="fab fa-linkedin"><span className="footer-link">LinkedIn</span></a>
        <Link to="/contact" className="fas fa-envelope"><span className="footer-link">Email</span></Link>
      </div>
      <h5>Ryan Milne 2020 | All Rights Reserved</h5>
    </div>
  );
};

export default Footer;