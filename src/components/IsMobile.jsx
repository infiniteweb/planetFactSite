import "../styles.css";

export default function IsMobile({ dataSelect, planetData, handleDataChange }) {
  return (
    <>
      {" "}
      <div className="is-mobile-textbox is-mobile-overview">
        <h3
          onClick={handleDataChange}
          data-id="overview"
          className={dataSelect === planetData.overview.content ? "active" : ""}
          id={`td-${planetData.name}`}
        >
          OVERVIEW
        </h3>
      </div>
      <div className="is-mobile-textbox">
        <h3
          onClick={handleDataChange}
          data-id="structure"
          className={
            dataSelect === planetData.structure.content ? "active" : ""
          }
          id={`td-${planetData.name}`}
        >
          STRUCTURE
        </h3>
      </div>
      <div className="is-mobile-textbox">
        <h3
          onClick={handleDataChange}
          data-id="geology"
          className={dataSelect === planetData.geology.content ? "active" : ""}
          id={`td-${planetData.name}`}
        >
          SURFACE
        </h3>
      </div>
    </>
  );
}
