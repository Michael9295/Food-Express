import React from "react";
import Welcome from "../assets/Welcome to food express.png";
import Carte from "../assets/carte.png";
import BoissonImage from "../assets/carteboisson.png";
import SaladesImage from "../assets/cartesalades.png";
import EntréesImage from "../assets/carteentrées.png";
import HamburgersImage from "../assets/cartehamburgers.png";
import SpecialHamburgers from "../assets/cartespecialhamburgers.png";
import Desserts from "../assets/cartedessert.png";

function Accueil() {
  return (
    <div className="flex flex-col items-center">
      <img src={Welcome} alt="Image" className="w-full max-w-full mx-auto" style={{ maxWidth: '1500px' }} />
      
      <img src={Carte} alt="Carte" className="w-full max-w-full mx-auto" style={{ maxWidth: '800px' }} />

      <div className="flex mt-3">
  <img src={BoissonImage} alt="Boisson" className="w-1/2 mr-2" />
  <img src={SaladesImage} alt="Salades" className="w-1/2 ml-2" />
</div>


<div className="flex mt-3">
  <img src={EntréesImage} alt="Boisson" className="w-1/2 mr-2" />
  <img src={HamburgersImage} alt="Salades" className="w-1/2 ml-2" />
</div>


<div className="flex mt-3 ml-20">
<img src={SpecialHamburgers} alt="Special Hamburgers" className="w-1/2 ml-n1" />
<img src={Desserts} alt="Desserts" className="w-1/2 ml-1" />
</div>



    </div>
  );
}

export default Accueil;
