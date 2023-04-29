import React from "react";
import "./Annadanam.css";
import Annadanampic from "../../Assets/Images/Annadanam.jpeg";

const Annadanam = () => {
  return (
    <div className="Annadanam">
      <div className="Annadanam-img">
        <img
          style={{ height: "220px", width: "598px" }}
          src={Annadanampic}
          alt=""
        />
      </div>
      <div className="Annadanam-text">
        అన్నదానం, అనేది రెండు పదాలతో రూపొందించబడింది,'అన్నం' అంటే ఆహారం, 'దానం'
        అంటే ఇవ్వడం లేదా దానం చేయడం. అన్నదానాన్ని వివిధ రకాల దానంలో 'మహాదానం'
        అంటారు.ప్రతి జీవికి ప్రశాంతమైన జీవితాన్ని గడపడానికి కొన్ని ప్రాథమిక
        అంశాలు అవసరం. బట్టలు, ఆశ్రయం వంటి అంశాలు జీవన నాణ్యతను ప్రభావితం
        చేస్తున్నప్పటికీ, ఆహారం లేకపోతే జీవితమే లేదు.అందుకే అన్నం పరబ్రహ్మ
        స్వరూపం అంటారు. అన్నం లేదా ఆహారం లేకపోతే ఏ ప్రాణి జీవించలేదు.
        <div className="anndanam-button-container">
          <button className="annadanam-button">Donate</button>
        </div>
      </div>
    </div>
  );
};

export default Annadanam;
