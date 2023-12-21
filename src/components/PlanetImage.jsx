import "../styles.css";

export default function PlanetImage({
  geologyImage,
  imageSelect,
  surfaceImage,
  planetName,
}) {
  return (
    <>
      <span id={`planet-image-${planetName}`}>
        <img src={imageSelect} />

        {geologyImage && (
          <img id={`planet-surface-image-${planetName}`} src={surfaceImage} />
        )}
      </span>
    </>
  );
}
