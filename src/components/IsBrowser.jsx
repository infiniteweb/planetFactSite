import "../styles.css";

export default function Isbrowser({handleDataChange, dataSelect, planetData}) {
  console.log(planetData.name)
  return (
    <>
      <button
        id={
          dataSelect === planetData.overview.content
            ? `bg-${planetData.name}`
            : ""
        }
      >
        <span>01</span>
        <h3
          onClick={handleDataChange}
          data-id="overview"
          id={
            dataSelect === planetData.overview.content
              ? `bg-${planetData.name}`
              : ""
          }
        >
          OVERVIEW
        </h3>
      </button>
      <button
        id={
          dataSelect === planetData.structure.content
            ? `bg-${planetData.name}`
            : ""
        }
      >
        <span>02</span>
        <h3
          onClick={handleDataChange}
          data-id="structure"
          id={
            dataSelect === planetData.structure.content
              ? `bg-${planetData.name}`
              : ""
          }
        >
          INTERNAL STRUCTURE
        </h3>
      </button>
      <button
        id={
          dataSelect === planetData.geology.content
            ? `bg-${planetData.name}`
            : ""
        }
      >
        <span>03</span>
        <h3
          onClick={handleDataChange}
          data-id="geology"
          id={
            dataSelect === planetData.geology.content
              ? `bg-${planetData.name}`
              : ""
          }
        >
          SURFACE GEOLOGY
        </h3>
      </button>
    </>
  );
}
