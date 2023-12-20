import "../styles.css";
import { NavLink } from "react-router-dom";

export default function BrowserNav({ planetNames }) {
  return (
    <>
      <div className="browser-nav">
        <nav>
          <ul>
            {planetNames.map((planetName) => (
              <li key={planetName}>
                <NavLink to={planetName === "mercury" ? "/" : `/${planetName}`}>
                  {planetName.toUpperCase()}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
