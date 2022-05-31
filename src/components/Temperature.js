import axios from "axios";
import React, { useState, useEffect } from "react";
import luna from "../assets/luna.png";
import sol from "../assets/sol.png";

const Temperature = ({ cityData }) => {
  console.log(cityData);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/currentconditions/v1/${cityData.Key}?apikey=40UALyt0txsx11rBI6lGuqUgi0mGGvdu`
      )
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [cityData.Key]);

  return (
    <>
      {data && (
        <>
          <main>
            <h1>
              {cityData.EnglishName} {cityData.Country.EnglishName}
            </h1>
            <div>
              <h3>
                La temperatura hoy es de{" "}
                {Math.ceil(data.Temperature.Metric.Value)} º
              </h3>
              <h2>
                {data.Temperature.Metric.Value < 20 ? "Frío" : "Caluroso"}
              </h2>
              {data.IsDayTime === true && (
                <img className="img-weat" src={sol} alt="sun" />
              )}
              {data.IsDayTime === false && (
                <img className="img-weat" src={luna} alt="moon" />
              )}
              <p className="text-weat">{data.WeatherText}</p>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Temperature;
