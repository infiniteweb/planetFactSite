import "../styles.css";



export default function Planet({planetImage, iconImage, planetData}) {

    console.log(planetData)
  return (
    <>
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
        <span id="planet-image-wrapper">
          <img id="planet-image" src={planetImage} />
        </span>
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
