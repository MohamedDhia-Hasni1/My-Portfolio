import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mohamed Dhia</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/hasni_dhyaa_/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://x.com/HasniDhiaa"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i class="bx bxl-twitter"></i>
          </a>

          <a
            href="https://github.com/MohamedDhia-Hasni"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <uil className="bx bxl-github"></uil>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Mohamed Dhia Hasni. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
