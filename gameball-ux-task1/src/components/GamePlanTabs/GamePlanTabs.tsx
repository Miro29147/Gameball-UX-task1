import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./gameplantabs.scss";

const GamePlanTabs = () => {
  const [section, setSection] = useState<string>(
    localStorage.getItem("section") || ""
  );

  useEffect(() => {
    localStorage.setItem("section", section);
  }, [section]);
  return (
    <div className="gameplantabs">
      <Link
        onClick={() => setSection("levels")}
        className={
          section === "levels"
            ? "gameplantabs__tab link selected"
            : "gameplantabs__tab link"
        }
        to=""
      >
        <span className="gameplantabs__tab--title">Levels</span>
      </Link>
      <Link
        onClick={() => setSection("challenges")}
        className={
          section === "challenges"
            ? "gameplantabs__tab link selected"
            : "gameplantabs__tab link"
        }
        to=""
      >
        <span className="gameplantabs__tab--title">Challenges</span>
      </Link>
      <Link
        onClick={() => setSection("quests")}
        className={
          section === "quests"
            ? "gameplantabs__tab link selected"
            : "gameplantabs__tab link"
        }
        to=""
      >
        <span className="gameplantabs__tab--title">Quests</span>
      </Link>
    </div>
  );
};

export default GamePlanTabs;
