import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import WeatherScreen from "../components/WeatherScreen";

const Home = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <>
      <div>
        <ThemeProvider theme={darkTheme}>
          <NavBar />
          <WeatherScreen />
        </ThemeProvider>
      </div>
    </>
  );
};

export default Home;
