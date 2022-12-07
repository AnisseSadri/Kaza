import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Accueil from "./accueil/Accueil";
import APropos from "./apropos/APropos";
import Appartement from "./homes/Appartement";
import E404 from "./404/404";

function RoutesPath() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Navigate replace to="/accueil" />} path="/" />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/home/:id" element={<Appartement />} />
        <Route path="*" element={<E404 />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesPath;
