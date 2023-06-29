import React from "react";
import { useLocation } from "react-router-dom";

function PaymentSuccess() {
  const location = useLocation();
  return (
    <div className="paymentSucess-container">
      <div className="paymentSuccess-card">
        The transaction ID for your payment of <b>₹ {location.state.amount}</b>{" "}
        was successfully saved.
        <br /> Please save the following reference number:
        <br />
        <b> {location.state.referenceId} </b>
        <br />
      </div>
    </div>
  );
}

export default PaymentSuccess;
