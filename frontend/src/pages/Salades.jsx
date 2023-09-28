// Salades.jsx
import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import SaladesTitre from "../assets/saladestitre-removebg-preview.png";
import Salade1 from "../assets/salade1.png";
import Salade2 from "../assets/salade2.png";
import Salade3 from "../assets/salade3.png";

function Salades() {
  const { ajouterAuPanier } = usePanier();

  const salades = [
    { image: Salade1, prix: 4.99 },
    { image: Salade2, prix: 3.49 },
    { image: Salade3, prix: 2.99 },
  ];

  const buttonStyle = {
    backgroundColor: "orange",
    color: "white",
    padding: "0.25rem 0.5rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "0.5rem",
  };

  const imageStyle = {
    maxWidth: "100px",
    maxHeight: "100px",
  };

  return (
    <div>
      <img
        src={SaladesTitre}
        alt="Salades Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "40%", margin: "0 auto" }}
      />

      <div className="flex mt-4 ml-20 mb-4 flex-wrap">
        {salades.map((salade, index) => (
          <div key={index} className="max-w-4/4 max-h-2/4 mr-4 mb-4">
            <img
              src={salade.image}
              alt={`Salade ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle}
              onClick={() => ajouterAuPanier(salade.prix)}
            >
              Prix: {salade.prix.toFixed(2)} €
            </button>
          </div>
        ))}
      </div>
      <Link to="/panier" className="text-white">
        Panier
      </Link>
    </div>
  );
}

export default Salades;
