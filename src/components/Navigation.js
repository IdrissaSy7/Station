import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <div>
        <p>
          <i className="fa-solid fa-futbol fa-spin"></i>M Station
        </p>
      </div>
      <ul>
        <NavLink to="/">
          <li>
            <i className="fa-solid fa-house-user"></i>
            <span>Accueil</span>
          </li>
        </NavLink>

        <NavLink to="/calendrier">
          <li>
            <i className="fa-regular fa-calendar-days"></i>
            <span>Calendrier</span>
          </li>
        </NavLink>

        <NavLink to="/classement">
          <li>
            <i className="fa-solid fa-ranking-star"></i>
            <span>Classement</span>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
