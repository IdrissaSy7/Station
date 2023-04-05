import React, { useState, useEffect } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

const Classement = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://classementligue1.vercel.app/classementeuro",
    };

    axios
      .request(options)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1 className="title">Classement LDC</h1>
      {isLoading ? (
        <div className="loader">
          <Triangle
            height="180"
            width="180"
            color="#2faee0"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </div>
      ) : (
        <>
          <div className="classement">
            <div className="tableau">
              <table>
                <thead>
                  <tr>
                    <th>Pos.</th>
                    <th>Clubs</th>
                    <th>MJ</th>
                    <th className="hide">G</th>
                    <th className="hide">N</th>
                    <th className="hide">P</th>
                    <th className="hide">BM</th>
                    <th className="hide">BE</th>
                    <th className="hide">DB</th>
                    <th>Pts.</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((team, index) => (
                    <tr key={index} className="classementeuro">
                      <td>{index + 1}</td>
                      <td>
                        <img src={team.cover} alt="cover" />
                        {team.nom}
                      </td>
                      <td>
                        {team.matchs_gagnes * 1 +
                          team.matchs_nuls * 1 +
                          team.matchs_perdus * 1}
                      </td>
                      <td className="hide">{team.matchs_gagnes}</td>
                      <td className="hide">{team.matchs_nuls}</td>
                      <td className="hide">{team.matchs_perdus}</td>
                      <td className="hide">{team.buts_marques}</td>
                      <td className="hide">{team.buts_encaisses}</td>
                      <td className="hide">
                        {team.buts_marques * 1 - team.buts_encaisses * 1}
                      </td>
                      <td className="textbold">
                        {team.matchs_gagnes * 3 + team.matchs_nuls * 1}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Classement;
