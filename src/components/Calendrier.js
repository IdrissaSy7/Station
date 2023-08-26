import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const Calendrier = () => {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [newData, setNewData] = useState("Ligue 1");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://apiligue1sy.vercel.app/calendrierl1",
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
    const options2 = {
      method: "GET",
      url: "https://apiligue1sy.vercel.app/calendriercoupe",
    };

    axios
      .request(options2)
      .then(function (response) {
        setData2(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const options3 = {
      method: "GET",
      url: "https://apiligue1sy.vercel.app/calendriereuro",
    };

    axios
      .request(options3)
      .then(function (response) {
        setData3(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const tableChange = (selectedOption) => {
    setNewData(selectedOption);
  };

  let selectedData;
  if (newData === "Ligue des Champions") {
    selectedData = data3;
  } else if (newData === "Coupe de France") {
    selectedData = data2;
  } else {
    selectedData = data;
  }

  const handleOptionClick = (option) => {
    tableChange(option);
  };

  return (
    <div>
      <Navigation />
      <h1 className="title">Calendrier</h1>

      <div className="custom-select">
        {["Ligue 1", "Coupe de France", "Ligue des Champions"].map(
          (option, index) => (
            <div
              key={index}
              className={`option ${newData === option ? "selected" : ""}`}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          )
        )}
      </div>

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
                  {selectedData.map((p, index) => (
                    <tr key={index}>
                      <td>J{p.journee}</td>
                      <td className="date">{p.date}</td>
                      {p.domicile === true ? (
                        <>
                          <td className="textbold">
                            <Link key={index} id={p.id} to={`/10`}>
                              Marseille
                            </Link>
                          </td>
                          <td>{p.score_equipe}</td>
                          <td>-</td>
                          <td>{p.score_adversaire}</td>
                          <td>
                            <Link key={index} id={p.id} to={`/${p.id}`}>
                              {p.adversaire}
                            </Link>
                          </td>
                        </>
                      ) : (
                        <>
                          <td>
                            <Link key={index} id={p.id} to={`/${p.id}`}>
                              {p.adversaire}
                            </Link>
                          </td>{" "}
                          <td>{p.score_adversaire}</td>
                          <td>-</td>
                          <td>{p.score_equipe}</td>
                          <td className="textbold">
                            <Link key={index} id={p.id} to={`/10`}>
                              Marseille
                            </Link>
                          </td>{" "}
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
