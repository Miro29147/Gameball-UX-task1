import React, { useState } from "react";
import {
  challengesDataType,
  challengesData,
} from "../../static-data/challengesData";
import GamePlanTabs from "../../components/GamePlanTabs/GamePlanTabs";
import MoleculeControl from "../../components/MoleculeControl/MoleculeControl";
import ChallengesList from "../../components/ChallengesList/ChallengesList";
import "./gameplan.scss";

const GamePlan: React.FC = () => {
  const [data, setData] = useState<challengesDataType[]>(challengesData);
  const [modifiedData, setModifiedData] = useState<challengesDataType[]>([]);
  const [isFilter, setIsFilter] = useState<boolean>(false);
  return (
    <div className="gameplan">
      <div className="gameplan__gameplantabs">
        <GamePlanTabs />
      </div>
      <div className="gameplan__moleculecontrol">
        <MoleculeControl
          modifiedData={modifiedData}
          setModifiedData={setModifiedData}
          setIsFilter={setIsFilter}
          isFilter={isFilter}
          data={data}
          setData={setData}
        />
      </div>
      <ChallengesList
        modifiedData={modifiedData}
        data={data}
        isFilter={isFilter}
      />
    </div>
  );
};

export default GamePlan;
