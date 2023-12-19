import "../styles.css"

export default function PlanetData({dataSelect, iconImage, planetData}){
    return(
        <>
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
        </>
    )
}