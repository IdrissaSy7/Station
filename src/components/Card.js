import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const equipes = data.find((p) => p.id === id);
  const [backgroundColor, setBackgroundColor] = useState("white");
  const root = document.documentElement;

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://classementligue1.vercel.app/teaminfos",
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        if (response.data.backgroundColor) {
          setBackgroundColor(response.data.backgroundColor);
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (equipes && equipes.couleur) {
      root.style.setProperty("--primary", equipes.couleur);
      root.style.setProperty("--secondary", equipes.couleur2);
    }
  }, [equipes]);

  return (
    <div>
      {equipes ? (
        <div className="card">
          <NavLink to="/classement">
            <i className="fa-solid fa-arrow-left"></i>
          </NavLink>
          <div>
            <h1 className="title" id="teamname">
              {equipes.nom}{" "}
            </h1>
            <p>Nom complet : {equipes.nomcomplet}</p>
            <p className="fondation">Fondé en {equipes.fondation}</p>
            <p>Président : {equipes.president}</p>
            <p>Entraîneur : {equipes.Entraineur}</p>
            <p>
              {equipes.stade} ({equipes.capacitestade} places){" "}
            </p>
            <p>
              <img src={equipes.coverstade} alt="logo equipe" />
            </p>
          </div>
          <div>
            <p className="teamimg">
              <img
                className="coverstade"
                src={equipes.cover}
                alt="logo equipe"
              />
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;
