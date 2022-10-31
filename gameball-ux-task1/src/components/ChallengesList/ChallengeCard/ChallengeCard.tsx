import React from "react";
import mainIcon from "../../../assets/icon_ChallengeBlank-HiFi_50px.svg";
import frubies from "../../../assets/icon_Frubies-HiFi_20px.svg";
import points from "../../../assets/icon_Points_HiFi-S.svg";
import milestone from "../../../assets/icon_Milestones_HiFi-S.svg";
import tag from "../../../assets/icon_Tag_LoFi-XS.svg";
import { challengesDataType } from "../../../static-data/challengesData";
import "./challengecard.scss";

interface props {
  challengeData: challengesDataType;
}

const ChallengeCard: React.FC<props> = (challengeData: props) => {
  const data = challengeData.challengeData;
  return (
    <div className="challengecard">
      <div className="challengecard__status">
        {data.active === true ? (
          <>
            <span className="challengecard__activestatus--text">ACTIVE</span>
            <div className="challengecard__activestatus--icon "></div>
          </>
        ) : (
          <>
            <span className="challengecard__inactivestatus--text">
              INACTIVE
            </span>
            <div className="challengecard__inactivestatus--icon "></div>
          </>
        )}
      </div>
      <div className="challengecard__header">
        <img src={mainIcon} alt="" className="challengecard__header--image" />
        <div className="challengecard__header__text">
          <span className="challengecard__header__text--title">
            {data.title}
          </span>
          <span className="challengecard__header__text--date">{data.date}</span>
        </div>
      </div>
      <p className="challengecard--paragraph">{data.content}</p>
      <div className="challengecard__misc">
        <ul className="challengecard__misc__list">
          <li className="challengecard__misc__list__item">
            <div className="challengecard__misc__list__item__row">
              <img
                src={frubies}
                alt=""
                className="challengecard__misc__list__item__row--icon"
              />
              <span className="challengecard__misc__list__item__row--text">
                {data.frubies} Frubies
              </span>
            </div>
          </li>
          <li className="challengecard__misc__list__item">
            <div className="challengecard__misc__list__item__row">
              <img
                src={points}
                alt=""
                className="challengecard__misc__list__item__row--icon"
              />
              <span className="challengecard__misc__list__item__row--text">
                {data.points} Points
              </span>
            </div>
          </li>
          <li className="challengecard__misc__list__item">
            <div className="challengecard__misc__list__item__row">
              <img
                src={milestone}
                alt=""
                className="challengecard__misc__list__item__row--icon"
              />
              <span className="challengecard__misc__list__item__row--text">
                {data.milestones} Milestones
              </span>
            </div>
          </li>
          <li className="challengecard__misc__list__item">
            <div className="challengecard__misc__list__item__row tag">
              <img
                src={tag}
                alt=""
                className="challengecard__misc__list__item__tag--icon"
              />
              <span className="challengecard__misc__list__item__tag--text">
                {data.tag}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChallengeCard;
