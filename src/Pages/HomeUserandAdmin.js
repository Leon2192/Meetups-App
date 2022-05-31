import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import "../App.css";
import NavBar from "../components/NavBar";
import TemperatureScreen from "../components/TemperatureScreen";

const HomeUserandAdmin = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
    },
  });
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <NavBar />
        <TemperatureScreen />
      </ThemeProvider>
    </div>
  );
};

export default HomeUserandAdmin;
