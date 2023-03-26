import React, { useState, useEffect } from "react";
import axios from "axios";
import { Triangle } from "react-loader-spinner";

const Classement = () => {
  const [data, setData] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://classementligue1.vercel.app/classement",
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

  const handleSort = (column) => {
    const sortedData = [...data];
    if (sortOrder === column) {
      sortedData.reverse();
      setSortOrder(`-${column}`);
    } else {
      if (column === "nom") {
        sortedData.sort((a, b) => a[column].localeCompare(b[column]));
      } else {
        sortedData.sort((a, b) => b[column] - a[column]);
      }
      setSortOrder(column);
    }
    setData(sortedData);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <h1 className="title">Classement Ligue 1</h1>
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
          />{" "}
        </div>
      ) : (
        <>
          <div className="classement">
            <div className="tableau">
              <table>
                <thead>
                  <tr>
                    <th onClick={() => handleSort("position")}>Pos.</th>
                    <th onClick={() => handleSort("nom")}>Clubs</th>
                    <th onClick={() => handleSort("matchs_joues")}>MJ</th>
                    <th
                      onClick={() => handleSort("matchs_gagnes")}
                      className="hide"
                    >
                      G
                    </th>
                    <th
                      onClick={() => handleSort("matchs_nuls")}
                      className="hide"
                    >
                      N
                    </th>
                    <th
                      onClick={() => handleSort("matchs_perdus")}
                      className="hide"
                    >
                      P
                    </th>
                    <th
                      onClick={() => handleSort("buts_marques")}
                      className="hide"
                    >
                      BM
                    </th>
                    <th
                      onClick={() => handleSort("buts_encaisses")}
                      className="hide"
                    >
                      BE
                    </th>
                    <th
                      onClick={() => handleSort("difference_de_buts")}
                      className="hide"
                    >
                      DB
                    </th>
                    <th onClick={() => handleSort("points")}>Pts.</th>
                  </tr>
                </thead>

                <tbody>
                  {data.map((team, index) => (
                    <tr key={index}>
                      <td>{team.position}</td>
                      <td>
                        <img src={team.cover} alt="cover" />
                        {team.nom}
                      </td>
                      <td>{team.matchs_joues}</td>
                      <td className="hide">{team.matchs_gagnes}</td>
                      <td className="hide">{team.matchs_nuls}</td>
                      <td className="hide">{team.matchs_perdus}</td>
                      <td className="hide">{team.buts_marques}</td>
                      <td className="hide">{team.buts_encaisses}</td>
                      <td className="hide">{team.difference_de_buts}</td>
                      <td className="textbold">{team.points}</td>
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
