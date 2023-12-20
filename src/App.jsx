import "./styles.css";
import "./quickStyles.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Planet from "./pages/Planet.jsx";

import BrowserNav from "./components/browserNav";
import data from "../data.json";
import navBarImage from "./assets/images/icon-hamburger.svg";
import MobileNav from "./components/MobileNav.jsx";
import { images, surfaceImages } from "./images.js";

function App() {
  console.log(data)
  const [mobileNav, setMobileNav] = useState(false);
  function handleSetMobileNav() {
    console.log("click");
    setMobileNav((prevMobileNav) => !prevMobileNav);
  }

  const planetNames = [
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
  ];

  return (
    <>
      <BrowserRouter>
        <div className="container-grid">
          <div className="top-bar">
            {" "}
            <h2>THE PLANETS</h2>
            <img
              src={navBarImage}
              id="hamburger"
              onClick={handleSetMobileNav}
            />
          </div>
          <BrowserNav planetNames={planetNames} />
          <div className="mobile-nav">
            {mobileNav && (
              <MobileNav
                handleSetMobileNav={handleSetMobileNav}
                planetNames={planetNames}
              />
            )}
          </div>
          {!mobileNav && (
            <>
              <Routes>
                
                <Route
                  exact
                  path="/"
                  element={
                    <Planet
                      planetImage={images.mercury}
                      planetData={data[0]}
                      surfaceImage={surfaceImages.mercury}
                    />
                  }
                />
                <Route
                  path="/venus"
                  element={
                    <Planet
                      planetImage={images.venus}
                      planetData={data[1]}
                      surfaceImage={surfaceImages.venus}
                    />
                  }
                />
                <Route
                  path="/earth"
                  element={
                    <Planet
                      planetImage={images.earth}
                      planetData={data[2]}
                      surfaceImage={surfaceImages.earth}
                    />
                  }
                />
                <Route
                  path="/mars"
                  element={
                    <Planet
                      planetImage={images.mars}
                      planetData={data[3]}
                      surfaceImage={surfaceImages.mars}
                    />
                  }
                />
                <Route
                  path="/jupiter"
                  element={
                    <Planet
                      planetImage={images.jupiter}
                      planetData={data[4]}
                      surfaceImage={surfaceImages.jupiter}
                    />
                  }
                />
                <Route
                  path="/saturn"
                  element={
                    <Planet
                      planetImage={images.saturn}
                      planetData={data[5]}
                      surfaceImage={surfaceImages.saturn}
                    />
                  }
                />
                <Route
                  path="/uranus"
                  element={
                    <Planet
                      planetImage={images.uranus}
                      planetData={data[6]}
                      surfaceImage={surfaceImages.uranus}
                    />
                  }
                />
                <Route
                  path="/neptune"
                  element={
                    <Planet
                      planetImage={images.neptune}
                      planetData={data[7]}
                      surfaceImage={surfaceImages.neptune}
                    />
                  }
                />
              </Routes>
            </>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
