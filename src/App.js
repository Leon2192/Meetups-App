import SignUp from "./Pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import React from "react";
import "./App.css";
import WeatherScreen from "./components/WeatherScreen";
import HomeUserandAdmin from "./Pages/HomeUserandAdmin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/homeboth" element={<HomeUserandAdmin />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/weather" element={<WeatherScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
