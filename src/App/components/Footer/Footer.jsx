import React from "react";
// import Link from "react-router";
import "./Footer.css";
import youtube from "../../Assets/Images/youtube.png";
import facebook from "../../Assets/Images/facebook.png";
import whatsapp from "../../Assets/Images/whatsapp.png";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
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
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="/">
            <img
              className="footer-image"
              src={facebook}
              alt="youtube"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
          <a href="/">
            <img
              className="footer-image"
              src={whatsapp}
              alt="youtube"
              style={{ width: "30px", height: "30px" }}
            />
          </a>
        </div>
      </div>
      <div className="footer-mid">
        <div className="contactus-heading">CONTACT US</div>
        <div className="contactus-item">
          <div>
            <a
              className="contactus-item"
              href="https://goo.gl/maps/yrt1k3z2hEp9BTAX7"
              target="_blank"
              rel="noreferrer"
            >
              Route Map
            </a>
          </div>
        </div>
        <div className="contactus-item">+91 9491000721</div>
        <div className="contactus-item">aceomandapalli@gmail.com</div>
        <div className="contactus-item">
          POBOX 154-2 Mandapalli, Kothapeta, DR. B. R. Ambedkar
          Konaseema District, Andhra Pradesh 5333 223
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-right-item">Copyright©</div>
        <div
          className="footer-right-item"
          onClick={() => {
            navigate("/PrivacyPolicy");
          }}
        >
          Privacy policy
        </div>
        <div
          className="footer-right-item"
          onClick={() => {
            navigate("/TermsAndConditions");
          }}
        >
          Terms & conditions
        </div>
        <div
          className="footer-right-item"
          onClick={() => {
            navigate("/CancellationAndRefund");
          }}
        >
          Cancellation & Refund Policy
        </div>
        <a className="footer-right-item" href="http://www.pulseinfotechllp.com">
          Developedby: PULSE INFOTECH LLP
        </a>
      </div>
    </div>
  );
}

export default Footer;
