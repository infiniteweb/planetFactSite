import "./styles.css";
import "./quickStyles.css";
import Planet from "./components/Planet";
import data from "../data.json";
import mercuryImage from "./assets/images/planet-mercury.svg";
import navBarImage from "./assets/images/icon-hamburger.svg";
import Images from "./images"
import iconImage from "./assets/images/icon-source.svg";
import { useState, useEffect } from "react";



function App() {

  const [planetData, setPlanetData] = useState(data[0]);

  console.log(Images)
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
        <div className="browser-nav">
          <nav>
            <ul>
              <li>MERCURY</li>
              <li>VENUS</li>
              <li>EARTH</li>
              <li>MARS</li>
              <li>JUPITER</li>
              <li>SATURN</li>
              <li>URANUS</li>
              <li>NEPTUNE</li>
            </ul>
          </nav>
        </div>

        <Planet
          planetImage={mercuryImage}
          iconImage={iconImage}
          planetData={planetData}
        />
      </div>
    </>
  );
}

export default App;
