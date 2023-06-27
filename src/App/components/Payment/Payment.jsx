import React, { useState } from "react";
import QR from "../../Assets/Images/QR_Img.jpg";
import { useNavigate, useLocation } from "react-router";
import "./Payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [transactionId, setTransactionId] = useState();
  function PaymentHandler() {}
  return (
    <div>
      <div className="payment-heading">Make Payment</div>
      <div className="payment-container">
        <img
          style={{ width: "300px", height: "300px", marginRight: "50px" }}
          src={QR}
          alt=""
        />
        <div className="payment-content">
          <div>Please make your payment using the QR Code</div>
          <div>
            Make a payment of <b> ₹ {location.state.values}</b>
          </div>
          <div>
            <label htmlFor="">
              Please enter last 6 digits of transaction ID : <br />
              (example: xxxxxxxxxxxxxxxxxx123456 )
            </label>
            <br />
            <br />
            <input
              type="text"
              className="input-payment"
              placeholder="Enter Last 6 digits"
            />
          </div>
          <br />
          {/* <label htmlFor="">Please enter Debit from Details(Last 4 Digits)</label>
          <input type="text" /><br /> */}
          <button
            className="btn btn-primary button-payment"
            onClick={PaymentHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
