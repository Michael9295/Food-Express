import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import DessertTitre from "../assets/dessertstitre-removebg-preview.png";
import Dessert1 from "../assets/dessert1.png";
import Dessert2 from "../assets/dessert2.png";
import Dessert3 from "../assets/dessert3.png";
import Dessert4 from "../assets/dessert4.png";
import Dessert5 from "../assets/dessert5.png";
import Dessert6 from "../assets/dessert6.png";

function Desserts() {
  const { ajouterAuPanier } = usePanier();

  const desserts = [
    { nom: "ICAKE", image: Dessert1, prix: 4.99 },
    { nom: "CHEESECAKE A L'ESPAGNOLE", image: Dessert2, prix: 3.49 },
    { nom: "VANINUTE SHAKE", image: Dessert3, prix: 2.99 },
    { nom: "GOIKO SHAKE", image: Dessert4, prix: 3.79 },
    { nom: "FROZEN GOIKO", image: Dessert5, prix: 4.49 },
    { nom: "GOIKO BROOKIE", image: Dessert6, prix: 2.29 },
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
        src={DessertTitre}
        alt="Dessert Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "40%", margin: "0 auto" }}
      />

      <div className="flex mt-4 ml-20 mb-4 flex-wrap">
        {desserts.map((dessert, index) => (
          <div key={index} className="max-w-4/4 max-h-2/4 mr-4 mb-4">
            <img
              src={dessert.image}
              alt={`Dessert ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle}
              onClick={() => handleAjouterAuPanier(dessert)}
            >
              Ajouter au panier
              <br />
              Prix: {dessert.prix ? `${dessert.prix.toFixed(2)} €` : "N/A"}
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

export default Desserts;
