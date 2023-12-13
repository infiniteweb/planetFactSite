import "./styles.css";
import mecuryImage from "./assets/images/planet-mercury.svg";
import navBarImage from "./assets/images/icon-hamburger.svg";
import { useState, useEffect } from "react";
import { isBrowser, isMobile } from "react-device-detect";

function App() {
  const [data, setData] = useState(null);
  const [planetData, setPlanetData] = useState(null);
  const [navContent, setNavcontent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../data.json");
        const fetchedData = await response.json();
        setData(fetchedData);
        setPlanetData(fetchedData[0]);
        let navContent = [];
        for (let i = 1; i < fetchedData.length; i++) {
          navContent.push(fetchedData[i].name);
        }
        setNavcontent(navContent);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log(navContent);
  //The array index below will be a prop passed down to component//
  //ADD PRELOADER IN LOADING BIT??//
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {!loading && !error && (
        <div>
          <h2>THE PLANETS</h2>
          <img src={navBarImage} />
          <div id="is-mobile">
            <div className="">
              <h3>OVERVIEW</h3>
            </div>
            <div className="">
              <h3>STRUCTURE</h3>
            </div>
            <div className="">
              <h3>SURFACE</h3>
            </div>
          </div>

          <div className="">
            <div id="planet-card">
              <img id="mercury-image" src={mecuryImage} />
            </div>
            <div>
              <div>
                <>
                  <h1>{planetData.name}</h1>

                  <p>{planetData.overview.content}</p>
                  <a href={planetData.overview.source}>Source Wikipedia</a>
                </>
              </div>

              <div id="is-browser">
                <div>
                  <h3>OVERVIEW</h3>

                  <h3>STRUCTURE</h3>

                  <h3>SURFACE</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <h4>ROTATION TIME</h4> <h2>{planetData.rotation}</h2>
            </div>
            <div className="">
              <h4>REVOLUTION TIME</h4> <h2>{planetData.revolution}</h2>
            </div>
            <div className="">
              <h4>RADIUS</h4> <h2>{planetData.radius}</h2>
            </div>
            <div className="">
              <h4>AVERAGE TEMP.</h4> <h2>{planetData.temperature}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
