import React from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import SpecialHamburgersTitre from "../assets/spécialhamburgers-removebg-preview.png";
import SpecialHamburgers1 from "../assets/spécialhamburger1.png";
import SpecialHamburgers2 from "../assets/spécialhamburger2.png";
import SpecialHamburgers3 from "../assets/spécialhamburger3.png";

function SpecialHamburgers() {
  const { ajouterAuPanier } = usePanier();

  const specialHamburgers = [
    { nom: "LE KING LYON", image: SpecialHamburgers1, prix: 5.99 },
    { nom: "HAMBURGER OLLIE", image: SpecialHamburgers2, prix: 4.49 },
    { nom: "HAMBURGER LA LIBERTE", image: SpecialHamburgers3, prix: 6.49 },
  ];

  const handleAjouterAuPanier = (produit) => {
    ajouterAuPanier(produit);
  };

  return (
    <div>
      <img
        src={SpecialHamburgersTitre}
        alt="Special Hamburgers Titre"
        className="w-full"
        style={{ maxWidth: "50%", maxHeight: "40%", margin: "0 auto" }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        {specialHamburgers.map((specialHamburger, index) => (
          <div key={index} className="max-w-1/3 mr-2 max-h-1/3">
            <img
              src={specialHamburger.image}
              alt={`Special Hamburger ${index + 1}`}
              style={{ maxWidth: "100px", maxHeight: "100px" }}
            />
            <button
              style={{
                backgroundColor: "orange",
                color: "white",
                padding: "0.25rem 0.5rem",
                border: "none",
                borderRadius: "4px",
                marginTop: "0.5rem",
              }}
              onClick={() => handleAjouterAuPanier(specialHamburger)}
            >
              Ajouter au panier
              <br />
              Prix:{" "}
              {specialHamburger.prix
                ? `${specialHamburger.prix.toFixed(2)} €`
                : "N/A"}
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
