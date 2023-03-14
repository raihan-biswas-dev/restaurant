import React from "react";
import FooterLogo from "../assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div>
          <img src={FooterLogo} alt="" />
        </div>
        <div className="footer-icons">
          <FaFacebookF className="icon" />
          <BsTwitter className="icon" />
          <BsYoutube className="icon" />
          <AiFillLinkedin className="icon" />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Work</span>
          <span>Testimonials</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
