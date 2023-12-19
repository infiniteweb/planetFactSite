import "./styles.css";
import "./quickStyles.css";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import Planet from "./components/Planet";
import BrowserNav from "./components/browserNav";
import data from "../data.json";
import navBarImage from "./assets/images/icon-hamburger.svg";
// import images from "./images";
// import surfaceImages from "./images";
import { images, surfaceImages } from "./images.js";

function App() {
  return (
    <>
      <div className="container-grid">
        <div className="top-bar">
          {" "}
          <h2>THE PLANETS</h2>
          <img src={navBarImage} id="hamburger" />
        </div>

        <BrowserRouter>
          <BrowserNav />
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
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
