import React from "react";
import DessertTitre from "../assets/dessertstitre-removebg-preview.png";

function Desserts() {
  return (
    <div>
      <img
        src={DessertTitre}
        alt="Dessert Titre"
        className="w-full"
        style={{ maxWidth: '50%', maxHeight: '50%' }}
      />
    </div>
  );
}

export default Desserts;
