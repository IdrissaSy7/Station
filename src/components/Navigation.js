import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <p>
          <i className="fa-solid fa-futbol"></i>M Station
        </p>
      </div>

      <div className="link">
        <NavLink to="/">
          <i className="fa-solid fa-house-user"></i>
          <span>Accueil</span>
        </NavLink>

        <NavLink to="/calendrier">
          <i className="fa-regular fa-calendar-days"></i>
          <span>Calendrier</span>
        </NavLink>

        <NavLink to="/classement">
          <i className="fa-solid fa-ranking-star"></i>
          <span>Classement</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
