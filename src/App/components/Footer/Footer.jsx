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
        <a className="contactus-heading" href="https://merchant.razorpay.com/policy/M1TzaBVjdfXkWF/contact_us">CONTACT US</a>
        <div className="contactus-item">
          <div><a className="contactus-item" href="https://goo.gl/maps/yrt1k3z2hEp9BTAX7">Route Map</a></div>
        </div>
        <div className="contactus-item">+91 9491000721</div>
        <div className="contactus-item">aceomandapalli@gmail.com</div>
        <div className="contactus-item">
          POBOX 154-2 Mandapalli, Kothapeta, DR. B. R. Ambedkar Konaseema District, Andhra Pradesh 5333
          223
        </div>
      </div>
      <div className="footer-right">
      <div className="footer-right-item">Copyright©</div>
        <a className="footer-right-item" href="https://merchant.razorpay.com/policy/M1TzaBVjdfXkWF/privacy">Privacy policy</a> <br />
        <a className="footer-right-item" href="https://merchant.razorpay.com/policy/M1TzaBVjdfXkWF/terms">Terms & conditions</a> <br />
        <a className="footer-right-item" href="https://merchant.razorpay.com/policy/M1TzaBVjdfXkWF/refund">Cancellation & Refund Policy</a> <br />
        <a className="footer-right-item" href="https://merchant.razorpay.com/policy/M1TzaBVjdfXkWF/shipping">Shipping & Delivery policy</a> <br />
        <div className="footer-right-item">Developedby: PULSEINFOTECH</div>
      </div>
    </div>
  );
}

export default Footer;
