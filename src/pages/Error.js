import React from "react";
import Navigation from "../components/Navigation";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navigation />
      <div className="error">
        <p>404</p>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <NavLink to="/">
          <li>Retourner sur la page d’accueil</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Error;
