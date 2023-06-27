import React from "react";
import "./OnlineServices.css";
import { useNavigate } from "react-router-dom";

const OnlineServices = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="Online_services_title">Online Services</div>
      <div className="card-grid">
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">ఏకాదశ రుద్రతైలాభిషేకం</h2>
            <div className="card-description">
              <p>1 సారి పూజకు ₹ 400/-</p>
              <p>1సం.లో వచ్చే 52 శనివారములకు ₹ 20,800/-</p>
              <p>
                శాశ్వత అభిషేకము 10 సం||లు మాత్రమే ₹ 4,000/- (ఈ సం||తో కలిపి)
              </p>
              <p>
                శాశ్వత శనిత్రయోదశులు (సం.లో వచ్చే ప్రతి శనిత్రయోదశులు) 10 సం||లు
                మాత్రమే. ₹ 24,000/- (ఈ సం||తో కలిపి)
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/OnlineServicesDetails", {
                  state: { type: "YekadasaRudratailabishekam" },
                });
              }}
              className="card-button"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">మహాన్యాసపూర్వక ఏకవార రుద్రతైలాభిషేకం</h2>
            <div className="card-description">
              <p>1 సారి పూజకు ₹ 250/-</p>
              <p>1సం.లో వచ్చే 52 శనివారములకు ₹ |13,000/-</p>
              <p>
                శాశ్వత అభిషేకము 10 సం||లు మాత్రమే ₹ 3,000/- (ఈ సం||తో కలిపి)
              </p>
              <p>
                శాశ్వత శనిత్రయోదశులు (సం.లో వచ్చే ప్రతి శనిత్రయోదశులు) 10 సం||లు
                మాత్రమే. ₹ 18,000/- (ఈ సం||తో కలిపి)
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/OnlineServicesDetails", {
                  state: { type: "Mahanyasapurvaka" },
                });
              }}
              className="card-button"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">శని జపం</h2>
            <div className="card-description">
              <p>1 సారి పూజకు ₹ 6,000/-</p>
            </div>
            <button
              onClick={() => {
                navigate("/OnlineServicesDetails", {
                  state: { type: "Sanijapam" },
                });
              }}
              className="card-button"
            >
              Book Now
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h2 className="card-title">శని శాంతి హోమం</h2>
            <div className="card-description">
              <p>1 సారి పూజకు ₹ 1,000/-</p>
            </div>
            <button
              onClick={() => {
                navigate("/OnlineServicesDetails", {
                  state: { type: "SaniSanthi" },
                });
              }}
              className="card-button"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineServices;
