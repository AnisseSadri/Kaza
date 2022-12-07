import React, { useState } from "react";
import fleche from "../../assets/Fleche.svg";

function SwitchDown({ titre, description }) {
  const [ouvert, setOuvert] = useState(false);

  return (
    <div className="switchdown" id={`switchdown-${titre}`}>
      <div className="header-switchdown">
        <div className="titre-switchdown">{titre}</div>
        <span
          className={`fleche-switchdown ${ouvert}`}
          onClick={() => setOuvert(!ouvert)}
        >
          <img src={fleche} alt="Ouvrir cette liste" />
        </span>
      </div>
      {ouvert && <div className="description-switchdown">{description}</div>}
    </div>
  );
}

export default SwitchDown;
