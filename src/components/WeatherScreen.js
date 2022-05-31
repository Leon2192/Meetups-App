import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright } from "@mui/icons-material";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import React, { useState } from "react";
import Weather from "../components/Weather";
import "../App.css";

const WeatherScreen = () => {
  const [citySearch, setCitySearch] = useState("");
  const [cityData, setCityData] = useState(null);

  const fetchCity = (e) => {
    console.log(`request de axios: + ${citySearch}`);

    e.preventDefault(e);
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=40UALyt0txsx11rBI6lGuqUgi0mGGvdu&q=${citySearch}`
      )
      .then((response) => {
        console.log(response.data);
        setCitySearch("");
        setCityData(response.data[0]);
      });
  };

  return (
    <div>
      <h1 className="titlehead">Meetups</h1>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <SportsBarIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ¿En qué ciudad es tu evento?
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              margin="normal"
              required
              fullWidth
              label="Ciudad"
              name="Ciudad"
              autoComplete="Ciudad"
              autoFocus
            />
            {citySearch ? console.log(citySearch) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={fetchCity}
            >
              Clima
            </Button>
          </Box>
        </Box>
        {cityData && (
          <div style={{ padding: 10 + "px", width: 100 + "%" }}>
            <Weather cityData={cityData} />
          </div>
        )}
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </div>
  );
};

export default WeatherScreen;
