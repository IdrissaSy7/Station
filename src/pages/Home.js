import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const Home = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://apiligue1.vercel.app/calendrier",
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
    <div className="pages">
      <Navigation />
      <h1 className="title">Accueil</h1>
      {isLoading ? (
        <div className="loader">
          <i className="fa-solid fa-futbol fa-spin"></i>
        </div>
      ) : (
        <>
          <div className="prochainmatch">
            <h3>Prochain Match :</h3>
            {data && data.length > 0 && data[0].nextmatchindex ? (
              <>
                <p>
                  {data[data[0].nextmatchindex].journee} de{" "}
                  {data[data[0].nextmatchindex].ligue}
                </p>
                <div className="matchdate">
                  <p>{data[data[0].nextmatchindex].date}</p> -
                  <p>{data[data[0].nextmatchindex].horaires}</p>
                </div>
                <p className="chaine">
                  <i class="fa-solid fa-tv"></i>
                  {[data[0].chaine]}
                </p>
                <div className="matchcontent">
                  <p>
                    {data[data[0].nextmatchindex].domicile
                      ? "Marseille"
                      : data[data[0].nextmatchindex].adversaire}
                  </p>
                  <p>Vs</p>
                  <p>
                    {data[data[0].nextmatchindex].domicile
                      ? data[data[0].nextmatchindex].adversaire
                      : "Marseille"}
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
