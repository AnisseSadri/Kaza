import React from "react";
import Banner from "../accueil/Banner";
import bannerAPropos from "../../assets/bannerAPropos.png";
import SwitchDown from "../homes/SwitchDown";
import Layout from "../Layouts/Layout";

function APropos() {
  return (
    <>
      <Layout>
        <div className="APropos">
          <Banner imgbanner={bannerAPropos} display="display" />
          <SwitchDown
            titre="Fiabilité"
            description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <SwitchDown
            titre="Respect"
            description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <SwitchDown
            titre="Service"
            description="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          />
          <SwitchDown
            titre="Sécurité"
            description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </Layout>
    </>
  );
}

export default APropos;
