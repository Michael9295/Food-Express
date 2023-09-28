// Hamburgers.jsx
import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import HamburgersTitre from "../assets/hamburgerstitre-removebg-preview.png";
import Hamburger1 from "../assets/hamburger1.png";
import Hamburger2 from "../assets/hamburger3.png";
import Hamburger3 from "../assets/hamburger4.png";
import Hamburger4 from "../assets/hamburger5.png";
import Hamburger5 from "../assets/hamburger6.png";
import Hamburger6 from "../assets/hamburger7.png";

function Hamburgers() {
  const { ajouterAuPanier } = usePanier();

  const hamburgers = [
    { image: Hamburger1, prix: 4.99 },
    { image: Hamburger2, prix: 3.49 },
    { image: Hamburger3, prix: 2.99 },
    { image: Hamburger4, prix: 3.79 },
    { image: Hamburger5, prix: 4.49 },
    { image: Hamburger6, prix: 2.29 },
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
        src={HamburgersTitre}
        alt="Hamburgers Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "50%", margin: "0 auto" }}
      />

      <div className="flex mt-4 ml-20">
        {hamburgers.map((hamburger, index) => (
          <div key={index} className="max-w-1/3 mr-2 max-h-1/3">
            <img
              src={hamburger.image}
              alt={`Hamburger ${index + 1}`}
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

export default Hamburgers;
