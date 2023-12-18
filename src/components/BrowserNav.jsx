import "../styles.css";

export default function BrowserNav() {
  return (
    <>
      <div className="browser-nav">
        <nav>
          <ul>
            <li><a href="/">MERCURY</a></li>
            <li><a href="/venus">VENUS</a></li>
            <li><a href="/earth">EARTH</a></li>
            <li><a href="/mars">MARS</a></li>
            <li><a href="/jupiter">JUPITER</a></li>
            <li><a href="/saturn">SATURN</a></li>
            <li><a href="/uranus">URANUS</a></li>
            <li><a href="/neptune">NEPTUNE</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
