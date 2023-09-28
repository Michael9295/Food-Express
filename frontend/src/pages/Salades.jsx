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
    { nom: "LA SAINT-TROP", image: Salade1, prix: 2.99 },
    { nom: "LA OLIVIA", image: Salade2, prix: 2.99 },
    { nom: "AVE CAESAR", image: Salade3, prix: 2.99 },
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

  const handleAjouterAuPanier = (produit) => {
    ajouterAuPanier(produit);
  };

  return (
    <div>
      <img
        src={SaladesTitre}
        alt="Salades Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "40%", margin: "0 auto" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {salades.map((salade, index) => (
          <div key={index} className="max-w-1/3 mr-2 max-h-1/3">
            <img
              src={salade.image}
              alt={`Salade ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle}
              onClick={() => handleAjouterAuPanier(salade)}
            >
              Ajouter au panier
              <br />
              Prix: {salade.prix ? `${salade.prix.toFixed(2)} €` : "N/A"}
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
