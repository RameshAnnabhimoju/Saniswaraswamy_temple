import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="Navbar prevent-select">
      <div
        className="nav-item"
        onClick={() => {
          navigate("/")
        }}
      >
        <h6>Home</h6>
      </div>

      <div
      onClick={()=>{
        navigate("/About")
      }}
       className="nav-item">
        <h6>About Temple</h6>
      </div>
      <div className="nav-item">
        <h6>Sevas & Darshanam</h6>
      </div>
      <div
      onClick={()=>{
        navigate("/Donations")
      }}
       className="nav-item">
        <h6>Donations</h6>
      </div>

      <div className="nav-item">
        <h6>Online Services</h6>
      </div>

      <div
      onClick={()=>{
        navigate("/News")
      }}
       className="nav-item">
        <h6>News & Updates</h6>
      </div>

      <div className="nav-item">
        <h6>Gallery</h6>
      </div>

      <div className="nav-item">
        <h6>Support</h6>
      </div>
      <div className="nav-item nav-signup">
        <h6>Signin</h6>
      </div>
    </div>
  );
};

export default Navbar;
