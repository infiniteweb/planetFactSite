import "../styles.css";

export default function PlanetImage({geologyImage, imageSelect, surfaceImage}) {
  return (
    <>
      <span id="planet-image-wrapper">
        <img id="planet-image" src={imageSelect} />

        {geologyImage && <img id="planet-surface-image" src={surfaceImage} />}
      </span>
    </>
  );
}
