import React from "react";
import { Link } from "react-router-dom";
import dashboardIcon from "../../assets/icon_Dashboard_HiFi-M_InActive.svg";
import gamePlanIcon from "../../assets/icon_GamePlan_HiFi-M_Active.svg";
import LevelsIcon from "../../assets/icon_Levels_HiFi-M_InActive.svg";
import logo from "../../assets/logo.svg";
import "./sidemenu.scss";

type Props = {
  page: string;
  setPage: React.Dispatch<React.SetStateAction<string>>;
};

const SideMenu: React.FC<Props> = ({ page, setPage }: Props) => {
  return (
    <div className="sidemenu">
      <div className="sidemenu__top">
        <img src={logo} alt="" className="sidemenu__top--logo" />
      </div>
      <div className="sidemenu__pages">
        <Link
          onClick={() => setPage("dashboard")}
          className={
            page === "dashboard"
              ? "link sidemenu__pages__page selected"
              : "link sidemenu__pages__page"
          }
          to="/dashboard"
        >
          <img
            src={dashboardIcon}
            alt=""
            className="sidemenu__pages__page--icon"
          />
          <span className="sidemenu__pages__page--title">Dashboard</span>
        </Link>
        <Link
          onClick={() => setPage("gameplan")}
          className={
            page === "gameplan"
              ? "link sidemenu__pages__page selected"
              : "link sidemenu__pages__page"
          }
          to="/gameplan"
        >
          <img
            src={gamePlanIcon}
            alt=""
            className="sidemenu__pages__page--icon"
          />
          <span className="sidemenu__pages__page--title">Game Plan</span>
        </Link>
        <Link
          onClick={() => setPage("levels")}
          className={
            page === "levels"
              ? "link sidemenu__pages__page selected"
              : "link sidemenu__pages__page"
          }
          to="/levels"
        >
          <img
            src={LevelsIcon}
            alt=""
            className="sidemenu__pages__page--icon"
          />
          <span className="sidemenu__pages__page--title">Levels</span>
        </Link>
      </div>
    </div>
  );
};

export default SideMenu;
