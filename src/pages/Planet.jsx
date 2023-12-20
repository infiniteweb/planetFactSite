import "../styles.css";
import iconImage from "../assets/images/icon-source.svg";
import IsMobile from "../components/IsMobile";
import PlanetImage from "../components/PlanetImage";
import PlanetData from "../components/PlanetData";
import Isbrowser from "../components/IsBrowser";
import PlanetStats from "../components/PlanetStats";
import { useState, useEffect } from "react";


export default function Planet({ planetImage, planetData, surfaceImage }) {
  const [dataSelect, setDataSelect] = useState(planetData.overview.content);
  const [imageSelect, setImageSelect] = useState(planetImage.overview);
  const [geologyImage, setGeologyImage] = useState(false);
  const handleDataChange = (event) => {
    const id = event.target.getAttribute("data-id");

    setDataSelect(planetData[id].content);
    setImageSelect(planetImage[id]);
    if (id === "geology") {
      setImageSelect(planetImage.overview);
      setGeologyImage(true);
    } else {
      setGeologyImage(false);
    }
  };
  useEffect(() => {
    setDataSelect(planetData.overview.content);
    setImageSelect(planetImage.overview);
  }, [planetData, planetImage.overview]);

  return (
    <>
      <div className="is-mobile">
        <IsMobile
          handleDataChange={handleDataChange}
          dataSelect={dataSelect}
          planetData={planetData}
        />
      </div>
      <div id="planet-card">
        <PlanetImage
          geologyImage={geologyImage}
          imageSelect={imageSelect}
          surfaceImage={surfaceImage}
        />
      </div>
      <div className="planet-data">
        <PlanetData
          planetData={planetData}
          dataSelect={dataSelect}
          iconImage={iconImage}
        />
      </div>

      <div className="is-browser">
        <Isbrowser
          handleDataChange={handleDataChange}
          dataSelect={dataSelect}
          planetData={planetData}
        />
      </div>
      <div className="planet-stats">
        <PlanetStats planetData={planetData} />
      </div>
    </>
  );
}
