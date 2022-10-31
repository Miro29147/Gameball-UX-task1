import React from "react";
import dropdown from "../../assets/icon_Dropdown-Down_LS.svg";
import accountIcon from "../../assets/icon_Switcher_HiFi.svg";
import "./navbar.scss";

interface Props {
  page: string;
}

const NavBar: React.FC<Props> = (page: Props) => {
  var title;
  switch (page.page) {
    case "dashboard":
      title = "Dashboard";
      break;
    case "gameplan":
      title = "Game Plan";
      break;
    case "levels":
      title = "Levels";
      break;
    default:
  }
  return (
    <div className="navbar">
      <div className="navbar__left">
        <span className="navbar__left--title">{title}</span>
      </div>
      <div className="navbar__right">
        <img src={accountIcon} alt="" className="navbar__right--accounticon" />
        <div className="navbar__right__accountinfo">
          <span className="navbar__right__accountinfo--switcher">
            Account Switcher
          </span>
          <span className="navbar__right__accountinfo--name">Category 99</span>
        </div>
        <img src={dropdown} alt="" className="navbar__right--dropdown" />
      </div>
    </div>
  );
};

export default NavBar;
