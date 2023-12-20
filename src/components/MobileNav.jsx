import "../styles.css";
import { NavLink } from "react-router-dom";
import navBarChevron from "../assets/images/icon-chevron.svg";
import { images } from "../images";

export default function MobileNav({ handleSetMobileNav, planetNames }) {
  return (
    <>
      <nav>
        <ul>
          {planetNames.map((planetName) => (
            <li key={planetName}>
              <NavLink to={planetName === "mercury" ? "/" : `/${planetName}`}>
                <span onClick={handleSetMobileNav}>
                  <img src={images[planetName].overview} className="planet-img"></img>
                  {planetName.toUpperCase()}
                  <img src={navBarChevron} id="chevron"></img>
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
