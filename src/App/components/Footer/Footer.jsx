import React from "react";
// import Link from "react-router";
import "./Footer.css";
import youtube from "../../Assets/Images/youtube.png";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div className="footer-left-item">Social Media Links</div>
        <div>
          <a href="/">
            <img
              className="footer-image"
              src={youtube}
              alt="youtube"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a href="/">
            <img
              className="footer-image"
              src={facebook}
              alt="youtube"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
          <a href="/">
            <img
              className="footer-image"
              src={whatsapp}
              alt="youtube"
              style={{ width: "40px", height: "40px" }}
            />
          </a>
        </div>
      </div>
      <div className="footer-mid">
        <div className="contactus-heading">CONTACT US</div>
        <div className="contactus-item">
          <div>Route Map</div>
        </div>
        <div className="contactus-item">998998999</div>
        <div className="contactus-item">help@mandapallisaneshwara.com</div>
        <div className="contactus-item">
          POBOX 154-2 Mandapalli, Kothapeta, E.G District, Andhra Pradesh 5333
          223
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-item">Privacy policy</div>
        <div className="footer-right-item">Copyright©</div>
        <div className="footer-right-item">Terms & conditions</div>
        <div className="footer-right-item">Developedby: PULSEINFOTECH</div>
      </div>
    </div>
  );
}

export default Footer;
