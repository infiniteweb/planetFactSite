import "../styles.css";

export default function IsMobile({ dataSelect, planetData, handleDataChange }) {
  // console.log(dataSelect)
  // console.log(planetData.overview.content)
  // console.log(planetData.name)
  return (
    <>

      {" "}
      <div className="is-mobile-textbox is-mobile-overview">
        <h3
          onClick={handleDataChange}
          data-id="overview"
          id={dataSelect === planetData.overview.content ? `td-${planetData.name}` : ""}
        
        >
          OVERVIEW
        </h3>
      </div>
      <div className="is-mobile-textbox">
        <h3
          onClick={handleDataChange}
          data-id="structure"
          id={dataSelect === planetData.structure.content ? `td-${planetData.name}` : ""}
        >
          STRUCTURE
        </h3>
      </div>
      <div className="is-mobile-textbox">
        <h3
          onClick={handleDataChange}
          data-id="geology"
          id={dataSelect === planetData.geology.content ? `td-${planetData.name}` : ""}
        >
          SURFACE
        </h3>
      </div>
    </>
  );
}
