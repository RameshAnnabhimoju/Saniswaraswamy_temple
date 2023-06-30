import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="paymentSucess-container">
      <div className="paymentSuccess-card">
        The transaction ID for your payment of <b>₹ {location.state.amount}</b>{" "}
        was successfully saved.
        {/* <br /> Please save the following reference number:
        <br />
        <b> {location.state.referenceId} </b>
        <br /> */}
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
