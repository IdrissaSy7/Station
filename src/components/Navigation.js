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

        <li>
          <i className="fa-regular fa-calendar-days"></i>
          <span>Calendrier</span>
          <ul className="navactive" id="navactive1">
            <NavLink to="/calendrier">
              <li>Ligue 1</li>
            </NavLink>
            <NavLink to="/calendrierldc">
              <li>Ligue des Champions</li>
            </NavLink>
            <NavLink to="/calendriercoupe">
              <li>Coupe de France</li>
            </NavLink>
          </ul>
        </li>

        <li>
          <i className="fa-solid fa-ranking-star"></i>
          <span>Classement</span>
          <ul className="navactive" id="navactive2">
            <NavLink to="/classement">
              <li>Ligue 1</li>
            </NavLink>
            <NavLink to="/classementldc">
              <li>Ligue des Champions</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
