import geologyearth from "./assets/images/geology-earth.png";
import geologyjupiter from "./assets/images/geology-jupiter.png";
import geologymars from "./assets/images/geology-mars.png";
import geologymercury from "./assets/images/geology-mercury.png";
import geologyneptune from "./assets/images/geology-neptune.png";
import geologysaturn from "./assets/images/geology-saturn.png";
import geologyuranus from "./assets/images/geology-uranus.png";
import geologyvenus from "./assets/images/geology-venus.png";
import planetearth from "./assets/images/planet-earth.svg";

import planetmercury from "./assets/images/planet-mercury.svg";

import planetvenus from "./assets/images/planet-venus.svg";

import planetmars from "./assets/images/planet-mars.svg";

import planetjupiter from "./assets/images/planet-jupiter.svg";

import planetsaturn from "./assets/images/planet-saturn.svg";

import planeturanus from "./assets/images/planet-uranus.svg";

import planetneptune from "./assets/images/planet-neptune.svg";

import planetearthinternal from "./assets/images/planet-earth-internal.svg";

import planetmercuryinternal from "./assets/images/planet-mercury-internal.svg";

import planetvenusinternal from "./assets/images/planet-venus-internal.svg";

import planetmarsinternal from "./assets/images/planet-mars-internal.svg";

import planetjupiterinternal from "./assets/images/planet-jupiter-internal.svg";

import planetsaturninternal from "./assets/images/planet-saturn-internal.svg";

import planeturanusinternal from "./assets/images/planet-uranus-internal.svg";

import planetneptuneinternal from "./assets/images/planet-neptune-internal.svg";

const images = {
  mercury: {
    surface: geologymercury,
    overview: planetmercury,
    structure: planetmercuryinternal,
  },
  venus: {
    surface: geologyvenus,
    overview: planetvenus,
    structure: planetvenusinternal,
  },
  earth: {
    surface: geologyearth,
    overview: planetearth,
    structure: planetearthinternal,
  },
  mars: {
    surface: geologymars,
    overview: planetmars,
    structure: planetmarsinternal,
  },
  jupiter: {
    surface: geologyjupiter,
    overview: planetjupiter,
    structure: planetjupiterinternal,
  },
  saturn: {
    surface: geologysaturn,
    overview: planetsaturn,
    structure: planetsaturninternal,
  },
  uranus: {
    surface: geologyuranus,
    overview: planeturanus,
    structure: planeturanusinternal,
  },
  neptune: {
    surface: geologyneptune,
    overview: planetneptune,
    structure: planetneptuneinternal,
  },
};

const surfaceImages = {
  mercury: geologymercury,

  venus: geologyvenus,

  earth: geologyearth,

  mars: geologymars,

  jupiter: geologyjupiter,

  saturn: geologysaturn,

  uranus: geologyuranus,

  neptune: geologyneptune,
};

export { images, surfaceImages };
