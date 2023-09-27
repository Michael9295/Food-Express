import React from "react";
import BoissonTitre from "../assets/boissonstitre-removebg-preview.png";
import Boissons1 from "../assets/boisson.png";
import Boisson3 from "../assets/boisson3.png";
import Boisson4 from "../assets/boisson4.png";
import Boisson5 from "../assets/boisson5.png";
import Boisson6 from "../assets/boisson6.png";
import Boisson7 from "../assets/boisson7.png";

function Boisson() {
  return (
    <div>
      <img
        src={BoissonTitre}
        alt="Boisson Titre"
        className="w-full"
        style={{ maxWidth: '50%', maxHeight: '50%' }}
      />

      <div className="flex mt-4 ml-20">
        <img src={Boissons1} alt="Boissons1" className="max-w-1/2 mr-2 max-h-1/3" />
        <img src={Boisson3} alt="Boisson3" className="max-w-1/2 mr-2 max-h-1/3" />
        <img src={Boisson4} alt="Boisson4" className="max-w-1/2 max-h-1/3" />
      </div>

      <div className="flex mt-4 ml-20">
        <img src={Boisson5} alt="Boisson5" className="max-w-1/3 mr-2 max-h-1/3" />
        <img src={Boisson6} alt="Boisson6" className="max-w-1/3 mr-2 max-h-1/3" />
        <img src={Boisson7} alt="Boisson7" className="max-w-1/3 max-h-1/3" />
      </div>
    </div>
  );
}

export default Boisson;
