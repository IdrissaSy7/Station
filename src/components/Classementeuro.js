import React, { useState, useEffect } from "react";
import axios from "axios";

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
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1 className="title">Classement LDC</h1>
      {isLoading ? (
        <div className="loader">
          <i className="fa-solid fa-futbol fa-spin"></i>
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

                <tbody className="classementeuro">
                  {data
                    .map((team, index) => (
                      <tr key={index}>
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
                    ))
                    .sort((a, b) => {
                      return (
                        // Points
                        b.props.children[9].props.children -
                          a.props.children[9].props.children ||
                        // Différence buts
                        b.props.children[8].props.children -
                          a.props.children[8].props.children
                      );
                    })
                    .map((team, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        {team.props.children.slice(1)}
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
