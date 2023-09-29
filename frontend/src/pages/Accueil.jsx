import React from "react";
import { Link } from "react-router-dom";
import Welcome from "../assets/Welcome to food express.png";
import Carte from "../assets/carte-removebg-preview.png";
import BoissonImage from "../assets/carteboisson.png";
import SaladesImage from "../assets/cartesalades.png";
import EntréesImage from "../assets/carteentrées.png";
import HamburgersImage from "../assets/cartehamburgers.png";
import SpecialHamburgers from "../assets/cartespecialhamburgers.png";
import Desserts from "../assets/cartedessert.png";

function Accueil() {
  return (
    <div className="flex flex-col items-center bg-gray-200">
      <img
        src={Welcome}
        alt="Image"
        className="w-full max-w-full mx-auto"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <img
        src={Carte}
        alt="Carte"
        className="w-full max-w-full mx-auto"
        style={{ maxWidth: "60%", height: "auto" }}
      />

<div className="flex mt-4 ml-20">
        <Link to="/boissons">
          <img src={BoissonImage} alt="Boisson" className="w-3/4 mr-2" />
        </Link>
        <Link to="/salades">
          <img src={SaladesImage} alt="Salades" className="w-3/4 ml-1" />
        </Link>
      </div>

      <div className="flex mt-3 ml-20">
        <Link to="/entrées">
          <img src={EntréesImage} alt="Boisson" className="w-3/4 mr-2" />
        </Link>
        <Link to="/hamburgers">
          <img src={HamburgersImage} alt="Salades" className="w-3/4 ml-1" />
        </Link>
      </div>

      <div className="flex mt-3 ml-24">
        <Link to="/spécial-hamburgers">
          <img
            src={SpecialHamburgers}
            alt="Special Hamburgers"
            className="w-3/4 ml-2"
          />
        </Link>
        <Link to="/desserts">
          <img src={Desserts} alt="Desserts" className="w-3/4 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default Accueil;
