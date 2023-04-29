import React from "react";
import "./TopNav.css";

function TopNav() {
  return (
    <div className="topNav-container">
      <div className="topNav-left"></div>
      <div className="topNav-right">
        <button type="button" className="topNav-button">
          Signin
        </button>
      </div>
    </div>
  );
}

export default TopNav;
