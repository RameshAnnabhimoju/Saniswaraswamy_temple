import React, { useState, useEffect } from "react";
import QR1 from "../../Assets/Images/Scanner_img.jpg";
import QR2 from "../../Assets/Images/Scnr.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import "./Payment.css";
import { saveTransactionId } from "../../Services/paymentServices/saveTransactionService";
import Spinner from "react-bootstrap/Spinner";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [transactionId, setTransationId] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    loading
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  });
  async function PaymentHandler() {
    if (transactionId.length > 0) {
      setLoading(true);
      await saveTransactionId({
        ...location.state.values,
        transactionId,
        paymentMode: "QR",
      })
        .then((response) => {
          if (response?.data.status === "success") {
            navigate("/PaymentSuccess", {
              state: {
                referenceId: response?.data?.data,
                amount: location.state.values.amount,
              },
              replace: true,
            });
          }
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setLoading(false);
        });
    }
  }
  return (
    <div>
      <div className="payment-heading">Make Payment</div>
      {loading && (
        <div className="payment-loading-container">
          <Spinner
            animation="border"
            variant="warning"
            className="payment-loading"
          />
        </div>
      )}
      <div className="payment-container">
        <img
          style={{ width: "300px", height: "300px", marginRight: "50px" }}
          src={location.state.values.paymentType === "pooja" ? QR1 : QR2}
          alt=""
        />
        <div className="payment-content">
          <div>Please make your payment using the QR Code</div>
          <div>
            Make a payment of <b> ₹ {location.state.values.amount}</b>
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
              onChange={(event) => {
                setTransationId(event.target.value);
              }}
              value={transactionId}
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
