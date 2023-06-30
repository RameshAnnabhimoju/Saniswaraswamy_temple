import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
// import { PDFDownloadLink } from "@react-pdf/renderer";
// import PrintInvoice from "./PrintInvoice";
function PaymentSuccess() {
  const navigate = useNavigate();
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
        {/* <PDFDownloadLink
          document={<PrintInvoice />}
          fileName="paymentInvoice.pdf"
          style={{ textDecoration: "none" }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Print"
          }
        </PDFDownloadLink> */}
      </div>
    </div>
  );
}

export default PaymentSuccess;
