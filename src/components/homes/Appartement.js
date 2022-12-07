import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Houses from "../../datas/homes.json";
import Switch from "./Switch";
import Tag from "./Tag";
import Etoile from "../../assets/Etoile.png";
import EtoileVide from "../../assets/EtoileVide.png";
import SwitchDown from "./SwitchDown";
import Layout from "../Layouts/Layout";

function Appartement() {
  /* Récupère la bonne fiche */
  const id = useParams();
  const fichehome = Houses.find((home) => home.id === id.id);

  /* Tags */
  const tagshome = fichehome?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />;
  });

  /* Notes */
  let notehome = [];
  let etoileComplete = true;
  for (let index = 0; index < 5; index++) {
    if (index === parseInt(fichehome.rating)) {
      etoileComplete = false;
    }
    if (etoileComplete === true) {
      notehome.push(
        <img
          key={index}
          className="etoile"
          src={Etoile}
          alt={`${fichehome.rating}/5`}
        />
      );
    } else {
      notehome.push(
        <img
          key={index}
          className="etoile"
          src={EtoileVide}
          alt={`${fichehome.rating}/5`}
        />
      );
    }
  }

  /* Équipements */
  const equipementshome = fichehome.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      <Layout>
        {fichehome ? (
          <div className="appart">
            <Switch images={fichehome.pictures} />
            <div className="homes-proprio">
              <div className="info-homes">
                <span className="titre-home">{fichehome.title}</span>
                <span className="endroit-home">{fichehome.location}</span>
                <div className="tags">{tagshome}</div>
              </div>
              <div className="proprio-note">
                <div className="info-proprio">
                  <span className="nom-proprio">{fichehome.host.name}</span>
                  <img
                    className="photo-proprio"
                    src={fichehome.host.picture}
                    alt="Propriétaire"
                  />
                </div>
                <div className="note">{notehome}</div>
              </div>
            </div>
            <div className="description-equipements">
              <SwitchDown
                titre="Description"
                description={fichehome.description}
              />
              <SwitchDown titre="Équipements" description={equipementshome} />
            </div>
          </div>
        ) : (
          <Navigate replace to="/404" />
        )}
      </Layout>
    </>
  );
}

export default Appartement;
