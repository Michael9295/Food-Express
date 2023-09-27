import React from "react";
import SaladesTitre from "../assets/saladestitre-removebg-preview.png";
import Salade1 from "../assets/salade1.png";
import Salade2 from "../assets/salade2.png";
import Salade3 from "../assets/salade3.png";

function Salades() {
  return (
    <div>
      <img
        src={SaladesTitre}
        alt="Salades Titre"
        className="w-full"
        style={{ maxWidth: '50%', maxHeight: '50%' }}
      />

      <div className="flex mt-4 ml-20">
        <img src={Salade1} alt="Salade1" className="max-w-1/3 mr-2 max-h-1/3" />
        <img src={Salade2} alt="Salade2" className="max-w-1/3 mr-2 max-h-1/3" />
        <img src={Salade3} alt="Salade3" className="max-w-1/3 max-h-1/3" />
      </div>
    </div>
  );
}

export default Salades;
