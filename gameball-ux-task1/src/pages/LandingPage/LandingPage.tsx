import React from "react";
import logo from "../../assets/logo.svg";
import "./landingpage.scss";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <img src={logo} alt="" className="landingpage__animation" />
    </div>
  );
};

export default LandingPage;
