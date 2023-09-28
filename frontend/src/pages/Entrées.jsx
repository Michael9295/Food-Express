// Entrées.jsx
import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import EntréesTitre from "../assets/entréestitre-removebg-preview.png";
import Entrée1 from "../assets/entrée1.png";
import Entrée2 from "../assets/entrée2.png";
import Entrée3 from "../assets/entrée3.png";
import Entrée4 from "../assets/entrée4.png";
import Entrée5 from "../assets/entrée5.png";
import Entrée6 from "../assets/entrée6.png";

function Entrées() {
  const { ajouterAuPanier } = usePanier();

  const entrées = [
    { image: Entrée1, prix: 3.99 },
    { image: Entrée2, prix: 2.49 },
    { image: Entrée3, prix: 4.49 },
    { image: Entrée4, prix: 3.29 },
    { image: Entrée5, prix: 2.79 },
    { image: Entrée6, prix: 3.99 },
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
        src={EntréesTitre}
        alt="Entrées Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "50%", margin: "0 auto" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {entrées.map((entrée, index) => (
          <div key={index} className="max-w-1/3 mr-2 max-h-1/3">
            <img
              src={entrée.image}
              alt={`Entrée ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle}
              onClick={() => ajouterAuPanier(entrée.prix)}
            >
              Prix: {entrée.prix.toFixed(2)} €
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

export default Entrées;
