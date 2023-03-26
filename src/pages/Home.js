import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";
import { Triangle } from "react-loader-spinner";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://classementligue1.vercel.app/calendrier",
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
    <div className="pages">
      <Navigation />
      <h1 className="title">Accueil</h1>
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
          <div className="prochainmatch">
            <p>Prochain Match :</p>
            {data[29] ? (
              <>
                <p className="textbold">{data[29].journee}</p>
                <div className="matchdate">
                  <p>{data[29].date}</p>
                  <p>{data[29].horaires}</p>
                </div>
                <div className="matchcontent">
                  <p className="textbold">
                    {data[29].domicile ? "Marseille" : data[29].adversaire}
                  </p>
                  <p>Vs</p>
                  <p className="textbold">
                    {data[29].domicile ? data[29].adversaire : "Marseille"}
                  </p>
                </div>
              </>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
