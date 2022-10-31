import React, { useState } from "react";
import dropdown from "../../assets/icon_Dropdown-Down_LS.svg";
import accountIcon from "../../assets/icon_Switcher_HiFi.svg";
import "./navbar.scss";

interface Props {
  page: string;
}

const NavBar: React.FC<Props> = (page: Props) => {
  const [accountDrop, setAccountDrop] = useState<boolean>(false);
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
        <img
          onClick={() => setAccountDrop(!accountDrop)}
          src={dropdown}
          alt=""
          className={
            accountDrop
              ? "navbar__right--dropdown selected"
              : "navbar__right--dropdown"
          }
        />
      </div>
      <div
        className={accountDrop ? "navbar__dropdown active" : "navbar__dropdown"}
      >
        <ul className="navbar__dropdown__list">
          <li className="navbar__dropdown__list--item">Admin 67</li>
          <li className="navbar__dropdown__list--item">Abdelrahman Omar</li>
          <li className="navbar__dropdown__list--item">LOGOUT</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
