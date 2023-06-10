import React from "react";
import "./Baner.css";
import godimg from "../../Assets/Images/mandeshwarswamylogo.png";
import govlogo from "../../Assets/Images/AP-Govt-Logo.png";
import garland from "../../Assets/Images/garland-images.png"

const Baner = () => {
  return (
    <div>
      <div className="decoration">
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        <img className="garland-img" src={garland} alt="" />
        
      </div>
      <div className="Baner prevent-select">
        {/* <div className="god-image">
        </div> */}
        <img className="godimg select-disable" src={godimg} alt="" />

        <div className="title">
          <div className="temple-title">
            <div className="telugu-temple-title">
            శ్రీ మందేశ్వర (శనీశ్వర) స్వామి వారి దేవస్థానం
            </div>
          </div>
          <div className="english-temple-title">
            Sri Mandeswara (Saneswara) Swamy Devastanam
          </div>

          <div className="address-title">
            <div className="telugu-address-title">
              మందపల్లి గ్రామం, కొత్తపేట మండలం - 533223, డా॥బి.ఆర్. అంబేద్కర్ కోనసీమ జిల్లా
              (ఆంధ్రప్రదేశ్)
            </div>
            <div className="english-address-title">
              Mandapalli(V), Kothapeta(M) - 533223, DR. B. R. AMBEDKAR KONASEEMA DISTRICT(Andhra Pradesh) Ph:
              08855 243208
            </div>
          </div>
        </div>

        <div className="govt-logo">
          <img className="govtlogo select-disable" src={govlogo} alt="" />
          <div className="govt-title">
            <div className="telugu-govt-title">
              దేవాదాయ ధర్మాదాయ శాఖ, ఆంధ్రప్రదేశ్ ప్రభుత్వం
            </div>
            <div className="english-govt-title">  
              Endowment Department, Govt of AP.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
