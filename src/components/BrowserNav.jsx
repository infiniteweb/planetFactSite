import "../styles.css";
import { NavLink } from "react-router-dom";

export default function BrowserNav() {
  return (
    <>
      <div className="browser-nav">
        <nav>
          <ul>
            <li>
              <NavLink to="/">MERCURY</NavLink>
            </li>
            <li>
              <NavLink to="/venus" >VENUS</NavLink>
            </li>
            <li>
              <NavLink to="/earth">EARTH</NavLink>
            </li>
            <li>
              <NavLink to="/mars">MARS</NavLink>
            </li>
            <li>
              <NavLink to="/jupiter">JUPITER</NavLink>
            </li>
            <li>
              <NavLink to="/saturn">SATURN</NavLink>
            </li>
            <li>
              <NavLink to="/uranus">URANUS</NavLink>
            </li>
            <li>
              <NavLink to="/neptune">NEPTUNE</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
