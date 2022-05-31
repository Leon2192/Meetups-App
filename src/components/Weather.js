import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useState, useEffect } from "react";
import luna from "../assets/luna.png";
import sol from "../assets/sol.png";
import "../App.css";

const Weather = ({ cityData }) => {
  console.log(cityData);
  const [data, setData] = useState();
  const [cantidad, setCantidad] = useState("");
  const [birras, setBirras] = useState(6);

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
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Typography component="h4" variant="p">
              ¿Cuántas personas vienen al evento?
            </Typography>
            <TextField
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              margin="normal"
              required
              fullWidth
              label="Cantidad"
              name="Cantidad"
              autoComplete="Cantidad"
              autoFocus
            />
          </Box>
          <main>
            <h1>
              {cityData.EnglishName} {cityData.Country.EnglishName}
            </h1>
            <div>
              <h3>
                La temperatura hoy es de{" "}
                {Math.ceil(data.Temperature.Metric.Value)} º
              </h3>
              <h3>
                Necesitaremos{" "}
                {data.Temperature.Metric.Value >= 20 &&
                data.Temperature.Metric.Value <= 24
                  ? Math.ceil(cantidad / (birras / 1))
                  : data.Temperature.Metric.Value < 20
                  ? Math.ceil(cantidad / (birras / 0.75))
                  : data.Temperature.Metric.Value > 24
                  ? Math.ceil(cantidad / (birras / 3))
                  : null}{" "}
                packs de birra para esta reunión.
              </h3>

              {data.IsDayTime === true && (
                <img className="img-weat" src={sol} alt="sun" />
              )}
              {data.IsDayTime === false && (
                <img className="img-weat" src={luna} alt="moon" />
              )}
              <h4 className="text-weat">{data.WeatherText}</h4>
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Weather;
