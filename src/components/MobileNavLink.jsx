import "../styles.css";
import { NavLink } from "react-router-dom";
import navBarChevron from "../assets/images/icon-chevron.svg";
import { images } from "../images";

export default function MobileNavLink({ handleSetMobileNav, planetName }) {
  return (
    <>
      <NavLink to={planetName === "mercury" ? "/" : `/${planetName}`}>
        <span onClick={handleSetMobileNav}>
          <img src={images[planetName].overview}></img>
          {planetName.toUpperCase()}
          <img src={navBarChevron} id="chevron"></img>
        </span>
      </NavLink>
    </>
  );
}
