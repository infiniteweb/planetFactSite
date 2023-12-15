import "./styles.css";
import "./quickStyles.css";
import mecuryImage from "./assets/images/planet-mercury.svg";
import navBarImage from "./assets/images/icon-hamburger.svg";
import sourceImage from "./assets/images/icon-source.svg";
import { useState, useEffect } from "react";

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

          <div className="is-mobile">
            <div className="is-mobile-textbox is-mobile-overview">
              <h3>OVERVIEW</h3>
            </div>
            <div className="is-mobile-textbox">
              <h3>STRUCTURE</h3>
            </div>
            <div className="is-mobile-textbox">
              <h3>SURFACE</h3>
            </div>
          </div>

          <div id="planet-card">
            <img id="mercury-image" src={mecuryImage} />
          </div>

          <div className="planet-data">
            <div>
              <>
                <h1 className="planet-data-name">{planetData.name}</h1>

                <p className="planet-data-overview">
                  {planetData.overview.content}
                </p>
                <div className="source">
                  <span>Source: </span>
                  <a href={planetData.overview.source}>
                    Wikipedia <img src={sourceImage} />
                  </a>
                </div>
              </>
            </div>
          </div>
          <div className="is-browser">
            <button>
              <span>01</span><h3>OVERVIEW</h3>
            </button>
            <button>
            <span>02</span><h3>INTERNAL STRUCTURE</h3>
            </button>
            <button>
            <span>03</span><h3>SURFACE GEOLOGY</h3>
            </button>
          </div>

          <div className="planet-stats">
            <div>
              <h4>ROTATION TIME</h4> <h2>{planetData.rotation}</h2>
            </div>
            <div>
              <h4>REVOLUTION TIME</h4> <h2>{planetData.revolution}</h2>
            </div>
            <div>
              <h4>RADIUS</h4> <h2>{planetData.radius}</h2>
            </div>
            <div>
              <h4>AVERAGE TEMP.</h4> <h2>{planetData.temperature}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
