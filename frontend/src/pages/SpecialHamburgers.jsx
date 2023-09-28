// SpecialHamburgers.jsx
import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import SpecialHamburgersTitre from "../assets/spécialhamburgers-removebg-preview.png";
import SpecialHamburgers1 from "../assets/spécialhamburger1.png";
import SpecialHamburgers2 from "../assets/spécialhamburger2.png";
import SpecialHamburgers3 from "../assets/spécialhamburger3.png";

function SpecialHamburgers() {
  const { ajouterAuPanier } = usePanier();

  const hamburgersSpeciaux = [
    { image: SpecialHamburgers1, prix: 5.99 },
    { image: SpecialHamburgers2, prix: 4.49 },
    { image: SpecialHamburgers3, prix: 6.49 },
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
        src={SpecialHamburgersTitre}
        alt="Spécial Hamburgers Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "50%", margin: "0 auto" }}
      />

      <div className="flex mt-4 ml-20">
        {hamburgersSpeciaux.map((hamburger, index) => (
          <div key={index} className="max-w-1/3 mr-2 max-h-1/3">
            <img
              src={hamburger.image}
              alt={`Hamburger spécial ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle}
              onClick={() => ajouterAuPanier(hamburger.prix)}
            >
              Prix: {hamburger.prix.toFixed(2)} €
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

export default SpecialHamburgers;
