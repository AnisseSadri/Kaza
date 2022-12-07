import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../Layouts/Header";

function E404() {
  return (
    <>
      <Header />
      <div className="page404">
        <h1 className="titre404">404</h1>
        <span className="desc404">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <NavLink to="/" className="lien-site lien-404">
          Retourner sur la page d’accueil
        </NavLink>
      </div>
    </>
  );
}

export default E404;
