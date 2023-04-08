import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Calendrier = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://classementligue1.vercel.app/calendriercoupe",
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
      <Navigation />
      <h1 className="title">Calendrier CDF</h1>
      {isLoading ? (
        <div className="loader">
          <i className="fa-solid fa-futbol fa-spin"></i>
        </div>
      ) : (
        <>
          <div className="calendrier">
            <div className="tableau">
              <table>
                <tbody>
                  {data.map((p, index) => (
                    <tr key={index}>
                      <td>{p.journee}</td>
                      <td className="date">{p.date}</td>
                      {p.domicile === true ? (
                        <>
                          <td className="textbold">Marseille</td>
                          <td>{p.score_equipe}</td>
                          <td>-</td>
                          <td>{p.score_adversaire}</td>
                          <td>{p.adversaire}</td>
                        </>
                      ) : (
                        <>
                          <td>{p.adversaire}</td>
                          <td>{p.score_adversaire}</td>
                          <td>-</td>
                          <td>{p.score_equipe}</td>
                          <td className="textbold">Marseille</td>
                        </>
                      )}
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

export default Calendrier;
