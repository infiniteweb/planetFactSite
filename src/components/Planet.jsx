import "../styles.css";
import iconImage from "../assets/images/icon-source.svg";
import { useState } from "react";

export default function Planet({ planetImage, planetData, surfaceImage }) {
  const [dataSelect, setDataSelect] = useState(planetData.overview.content);
  const [imageSelect, setImageSelect] = useState(planetImage.overview);
  const [geologyImage, setGeologyImage] = useState(false);

  const handleDataChange = (event) => {
    const id = event.target.getAttribute("data-id");
    console.log(id);
    setDataSelect(planetData[id].content);
    setImageSelect(planetImage[id]);
    if (id === "geology") {
     setImageSelect(planetImage.overview)
      setGeologyImage(true);
    }else{
      setGeologyImage(false)
    }
  };

  return (
    <>
      <div className="is-mobile">
        <div className="is-mobile-textbox is-mobile-overview">
          <h3 onClick={handleDataChange} data-id="overview">
            OVERVIEW
          </h3>
        </div>
        <div className="is-mobile-textbox">
          <h3 onClick={handleDataChange} data-id="structure">
            STRUCTURE
          </h3>
        </div>
        <div className="is-mobile-textbox">
          <h3 onClick={handleDataChange} data-id="geology">
            SURFACE
          </h3>
        </div>
      </div>

      <div id="planet-card">
        <span id="planet-image-wrapper">
          <img id="planet-image" src={imageSelect} />
          
        {geologyImage && <img id="planet-surface-image" src={surfaceImage} />}
        </span>
      </div>

      <div className="planet-data">
        <div>
          <>
            <h1 className="planet-data-name">{planetData.name}</h1>

            <p className="planet-data-overview">{dataSelect}</p>
            <div className="source">
              <span>Source: </span>
              <a href={planetData.overview.source}>
                Wikipedia <img src={iconImage} />
              </a>
            </div>
          </>
        </div>
      </div>
      <div className="is-browser">
        <button>
          <span>01</span>
          <h3>OVERVIEW</h3>
        </button>
        <button>
          <span>02</span>
          <h3>INTERNAL STRUCTURE</h3>
        </button>
        <button>
          <span>03</span>
          <h3>SURFACE GEOLOGY</h3>
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
    </>
  );
}
