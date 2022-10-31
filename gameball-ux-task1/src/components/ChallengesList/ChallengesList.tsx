import React from "react";
import ChallengeCard from "./ChallengeCard/ChallengeCard";
import addIcon from "../../assets/icon_Add-LoFi_20px.svg";
import { challengesDataType } from "../../static-data/challengesData";
import "./challengeslist.scss";

type Props = {
  modifiedData: challengesDataType[];
  isFilter: Boolean;
  data: challengesDataType[];
};

const ChallengesList: React.FC<Props> = ({
  modifiedData,
  isFilter,
  data,
}: Props) => {
  return (
    <div className="challengeslist">
      <div className="challengeslist__topsection">
        <span className="challengeslist__topsection--counter">
          4 Challenges
        </span>
        <div className="challengeslist__topsection__add">
          <span className="challengeslist__topsection__add--title">
            Create New Challenge
          </span>
          <img
            src={addIcon}
            alt=""
            className="challengeslist__topsection__add--icon"
          />
        </div>
      </div>
      <div className="challengeList__cards">
        {isFilter
          ? modifiedData.map((challenge) => (
              <ChallengeCard challengeData={challenge} />
            ))
          : data.map((challenge) => (
              <ChallengeCard challengeData={challenge} />
            ))}
      </div>
    </div>
  );
};

export default ChallengesList;
