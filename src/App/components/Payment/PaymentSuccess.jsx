import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import PrintInvoice from "./PrintInvoice";
function PaymentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="paymentSucess-container">
      <div className="paymentSuccess-card">
        The transaction ID for your payment of{" "}
        <b>₹ {location.state.data.amount}</b> was successfully saved.
        <br /> Please save the following reference number:
        <br />
        <b> {location.state.data.referenceId} </b>
        <br />
        <br />
      </div>
      <div>
        <button
          className="btn btn-primary paymentSuccess-button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home
        </button>
        <button className="btn btn-primary paymentSuccess-button">
          <PDFDownloadLink
            document={<PrintInvoice data={location.state.data} />}
            fileName="paymentInvoice.pdf"
            style={{ textDecoration: "none", color: "white" }}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Print"
            }
          </PDFDownloadLink>
        </button>
      </div>
    </div>
  );
}

export default PaymentSuccess;
