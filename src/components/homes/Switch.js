import React, { useState } from "react";
import fleche from "../../assets/Fleche.png";

function Switch({ images }) {
  let [imgAfficher, changerImg] = useState(0);
  let nombreImg = images.length;

  function imgPrecedente() {
    if (imgAfficher === 0) {
      changerImg(nombreImg - 1);
    } else {
      changerImg(imgAfficher - 1);
    }
    return changerImg;
  }

  function imgSuivante() {
    if (imgAfficher === nombreImg - 1) {
      changerImg((nombreImg = 0));
    } else {
      changerImg(imgAfficher + 1);
    }
    return changerImg;
  }

  return (
    <div className="switch">
      {nombreImg > 1 && (
        <img
          className="fleche fleche-gauche"
          src={fleche}
          alt="Contenu précedént"
          onClick={imgPrecedente}
        />
      )}
      {images.map((image, index) => {
        return (
          <img
            key={index}
            className={
              index === imgAfficher ? "switch-img actif" : "switch-img"
            }
            src={image}
            alt="home"
          />
        );
      })}
      {nombreImg > 1 && (
        <img
          className="fleche fleche-droite"
          src={fleche}
          alt="Contenu suivant"
          onClick={imgSuivante}
        />
      )}
    </div>
  );
}

export default Switch;
