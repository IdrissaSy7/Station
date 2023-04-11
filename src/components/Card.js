import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Card = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const equipes = data.find((p) => p.id === id);
  const root = document.documentElement;
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://apiligue1.vercel.app/teaminfos",
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        setIsLoading(false);
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
      {!isLoading && equipes ? (
        <div className="card">
          <span onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i>
          </span>
          <div className="cardcontent">
            <h1 className="title" id="teamname">
              {equipes.nom}{" "}
            </h1>
            <p>Nom complet : {equipes.nomcomplet}</p>
            <p className="fondation">Fondé en {equipes.fondation}</p>
            <p>Président : {equipes.president}</p>
            <p>Entraîneur : {equipes.Entraineur}</p>
            <p>
              Stade : {equipes.stade} ({equipes.capacitestade} places){" "}
            </p>
            <div className="coverstade">
              <p>
                <img src={equipes.coverstade} alt="logo equipe" />
              </p>
            </div>
          </div>
          <div>
            <p className="teamimg">
              <img src={equipes.cover} alt="logo equipe" />
            </p>
          </div>
        </div>
      ) : (
        <div className="loader">
          <i className="fa-solid fa-futbol fa-spin"></i>
        </div>
      )}
    </div>
  );
};

export default Card;
