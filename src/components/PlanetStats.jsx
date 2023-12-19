import "../styles.css";

export default function PlanetStats({ planetData }) {
  return (
    <>
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
    </>
  );
}
