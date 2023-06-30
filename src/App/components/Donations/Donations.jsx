import React from "react";
import "./Donations.css";
import QR_code from "../../Assets/Images/Scnr.jpg";
import { useNavigate } from "react-router-dom";

const Donations = () => {
  const navigate = useNavigate();
  return (
    <div className="Donations">
      <div className="Donations-img">
        <img style={{ height: "240px", width: "599px" }} src={QR_code} alt="" />
      </div>
      <div className="Donations-text">
        స్కాంద పురాణంలో ఈ క్రింది శ్లోకం ఉంది: "కేవలం ఆలయ నిర్మాణం లేదా
        పునరుద్ధరణ కోసం విరాళం ఇవ్వడం ద్వారా ఏడు జన్మలలో చేసిన పాపాలన్నీ
        నశిస్తాయి మరియు నరక గ్రహాలలో బాధపడుతున్న తన పూర్వీకులకు అది
        అందజేస్తుంది.
      </div>
      <div className="donations-button-container">
        <button
          className="donations-button"
          onClick={() => {
            navigate("/Payment", { state: { values: "", type: "donation" } });
          }}
        >
          Donate
        </button>
      </div>
    </div>
  );
};

export default Donations;
