import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import BoissonTitre from "../assets/boissonstitre-removebg-preview.png";
import Boissons1 from "../assets/boisson.png";
import Boisson3 from "../assets/boisson3.png";
import Boisson4 from "../assets/boisson4.png";
import Boisson5 from "../assets/boisson5.png";
import Boisson6 from "../assets/boisson6.png";
import Boisson7 from "../assets/boisson7.png";

function Boisson() {
  const { ajouterAuPanier } = usePanier();

  const boissons = [
    { image: Boissons1, prix: 2.99 },
    { image: Boisson3, prix: 1.99 },
    { image: Boisson4, prix: 3.49 },
    { image: Boisson5, prix: 2.29 },
    { image: Boisson6, prix: 1.79 },
    { image: Boisson7, prix: 2.99 },
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
        src={BoissonTitre}
        alt="Boisson Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "40%", margin: "0 auto" }}
      />

      <div className="flex mt-4 ml-20 mb-4 flex-wrap">
        {boissons.map((boisson, index) => (
          <div key={index} className="max-w-4/4 max-h-2/4 mr-4 mb-4">
            <img
              src={boisson.image}
              alt={`Boisson ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle}
              onClick={() => ajouterAuPanier(boisson.prix)}
            >
              Prix: {boisson.prix.toFixed(2)} €
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

export default Boisson;
