import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>

        <NavLink to="/calendrier">
          <li>Calendrier</li>
        </NavLink>

        <NavLink to="/classement">
          <li>Classement</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
