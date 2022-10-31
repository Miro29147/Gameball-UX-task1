import React from "react";
import logo from "../../assets/logo.svg";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <img src={logo} alt="" className="dashboard__animation" />
    </div>
  );
};

export default Dashboard;
