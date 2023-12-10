import "./styles.css";
import mecuryImage from "./assets/images/planet-mercury.svg";
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
        <div className="container-fluid">
          <div className="row row-cols-2 row-cols-md-1 ">
            <div className="col d-flex justify-content-md-center">
              <div className="planets-header">
                <h2>THE PLANETS</h2>
              </div>
            </div>
            <div className="col d-flex justify-content-sm-end justify-content-md-center">
              <nav className="navbar navbar-expand-md">
                <div className="container ">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar"
                    aria-controls="offcanvasNavbar"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                  >
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        Offcanvas
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            aria-current="page"
                            href="#"
                          >
                            {planetData.name}
                          </a>
                        </li>
                        {/* PUT A HREF ATTRIBUTE IN HERE THAT SOMEHOW CHANGES THE PLANETDATA ATTRIBUTE TO A DIFFERENT PLANET THEREFORE RENDERING SOMETHING ELSE */}
                        {navContent.map((data) => (
                          <li className="nav-link" key={data}>
                            {data}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <div className="row row-cols-3" id="is-mobile">
            <div className="col d-flex justify-content-center">
              <h4>OVERVIEW</h4>
            </div>
            <div className="col d-flex justify-content-center">
              <h4>STRUCTURE</h4>
            </div>
            <div className="col d-flex justify-content-center">
              <h4>SURFACE</h4>
            </div>
          </div>

          <div className="row row-cols-1">
            <div className="col d-flex justify-content-center ">
              <img id="mercury-image" src={mecuryImage} />
            </div>
            <div className="col d-flex justify-content-center flex-wrap ">
              <>
                {" "}
                <h1>{planetData.name}</h1>
                <p>{planetData.overview.content}</p>
                <a href={planetData.overview.source}>Source Wikipedia</a>
              </>
            </div>
          </div>

          <div className="row row-cols-1">
            {data && (
              <>
                <div className="col d-flex justify-content-between">
                  <h4>ROTATION TIME</h4> <span>{planetData.rotation}</span>
                </div>
                <div className="col d-flex justify-content-between">
                  <h4>ROTATION TIME</h4> <span>{planetData.revolution}</span>
                </div>
                <div className="col d-flex justify-content-between">
                  <h4>ROTATION TIME</h4> <span>{planetData.radius}</span>
                </div>
                <div className="col d-flex justify-content-between">
                  <h4>ROTATION TIME</h4> <span>{planetData.temperature}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
