import "./styles.css";
import "./quickStyles.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Planet from "./components/Planet";
import BrowserNav from "./components/browserNav";
import data from "../data.json";
import mercuryImage from "./assets/images/planet-mercury.svg";
import venusImage from "./assets/images/planet-venus.svg";
import navBarImage from "./assets/images/icon-hamburger.svg";

import Images from "./images";
import iconImage from "./assets/images/icon-source.svg";
import { useState, useEffect } from "react";

function App() {
  console.log(data);
  console.log(Images);
  //The array index below will be a prop passed down to component//
  //ADD PRELOADER IN LOADING BIT??//
  return (
    <>
      <div className="container-grid">
        <div className="top-bar">
          {" "}
          <h2>THE PLANETS</h2>
          <img src={navBarImage} id="hamburger" />
        </div>

        <BrowserNav />
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Planet planetImage={mercuryImage} planetData={data[0]} />
              }
            />
            <Route
              path="/venus"
              element={
                <Planet planetImage={venusImage} planetData={data[1]} />
              }
            />
            <Route
              path="/earth"
              element={
                <Planet planetImage={venusImage} planetData={data[2]} />
              }
            />
            <Route
              path="/mars"
              element={
                <Planet planetImage={venusImage} planetData={data[3]} />
              }
            />
            <Route
              path="/jupiter"
              element={
                <Planet planetImage={venusImage} planetData={data[4]} />
              }
            />
            <Route
              path="/saturn"
              element={
                <Planet planetImage={venusImage} planetData={data[5]} />
              }
            />
            <Route
              path="/uranus"
              element={
                <Planet planetImage={venusImage} planetData={data[6]} />
              }
            />
            <Route
              path="/neptune"
              element={
                <Planet planetImage={venusImage} planetData={data[7]} />
              }
            />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
