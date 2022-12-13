import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Houses from "../../datas/homes.json";
import Switch from "./Switch";
import Tag from "./Tag";
import EtoilePleine from "../../assets/Etoile.png";
import EtoileVide from "../../assets/EtoileVide.png";
import SwitchDown from "./SwitchDown";
import Layout from "../Layouts/Layout";

function Appartement() {
  /* Récupère la bonne fiche */
  const id = useParams();
  const appart = Houses.find((home) => home.id === id.id);

  /* Tags */
  const tagshome = appart?.tags.map((tags, index) => {
    return <Tag key={index} nom={tags} />;
  });

  /* Notes */
  let notehome = [];
  let etoilePleine = true;
  for (let i = 0; i < 5; i++) {
    if (i === parseInt(appart?.rating)) {
      etoilePleine = false;
    }
    if (etoilePleine === true) {
      notehome.push(
        <img
          key={i}
          className="etoile"
          src={EtoilePleine}
          alt={`${appart?.rating}/5`}
        />
      );
    } else {
      notehome.push(
        <img
          key={i}
          className="etoile"
          src={EtoileVide}
          alt={`${appart?.rating}/5`}
        />
      );
    }
  }

  /* Équipements */
  const equipementshome = appart?.equipments.map((equipment, index) => {
    return <li key={index}>{equipment}</li>;
  });

  return (
    <>
      <Layout>
        {appart ? (
          <div className="appart">
            <Switch images={appart?.pictures} />
            <div className="homes-proprio">
              <div className="info-homes">
                <span className="titre-home">{appart?.title}</span>
                <span className="endroit-home">{appart?.location}</span>
                <div className="tags">{tagshome}</div>
              </div>
              <div className="proprio-note">
                <div className="info-proprio">
                  <span className="nom-proprio">{appart?.host.name}</span>
                  <img
                    className="photo-proprio"
                    src={appart?.host.picture}
                    alt="proprio"
                  />
                </div>
                <div className="note">{notehome}</div>
              </div>
            </div>
            <div className="description-equipements">
              <SwitchDown
                titre="Description"
                description={appart?.description}
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
