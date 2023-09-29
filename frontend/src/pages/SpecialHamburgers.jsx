import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import SpecialHamburgersTitre from "../assets/spécialhamburgers-removebg-preview.png";
import SpecialHamburgers1 from "../assets/spécialhamburger1.png";
import SpecialHamburgers2 from "../assets/spécialhamburger2.png";
import SpecialHamburgers3 from "../assets/spécialhamburger3.png";

function SpecialHamburgers() {
  const { ajouterAuPanier } = usePanier();
  const [clickedButton, setClickedButton] = useState(null);

  const specialHamburgers = [
    { nom: "LE KING LYON", image: SpecialHamburgers1, prix: 5.99 },
    { nom: "HAMBURGER OLLIE", image: SpecialHamburgers2, prix: 4.49 },
    { nom: "HAMBURGER LA LIBERTE", image: SpecialHamburgers3, prix: 6.49 },
  ];

  const handleAjouterAuPanier = (index) => {
    setClickedButton(index);
    setTimeout(() => {
      setClickedButton(null);
    }, 1000);
    ajouterAuPanier(specialHamburgers[index]);
  };

  const buttonStyle = (index) => ({
    backgroundColor: clickedButton === index ? "green" : "orange",
    color: "white",
    padding: "0.25rem 0.5rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "0.5rem",
  });

  const imageStyle = {
    maxWidth: "280px",
    maxHeight: "280px",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const titreImageStyle = {
    maxWidth: "30%",
    maxHeight: "30%",
    margin: "0 auto",
    display: "block",
  };

  return (
    <div className="bg-gray-200">
      <img
        src={SpecialHamburgersTitre}
        alt="Special Hamburgers Titre"
        className="w-full"
        style={titreImageStyle}
      />

      <div style={containerStyle}>
        {specialHamburgers.map((specialHamburger, index) => (
          <div key={index} className="mr-2 mb-2">
            <img
              src={specialHamburger.image}
              alt={`Special Hamburger ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index)}
              onClick={() => handleAjouterAuPanier(index)}
            >
              {clickedButton === index ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {specialHamburger.prix ? `${specialHamburger.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <Link to="/panier" className="text-white">
      </Link>
    </div>
  );
}

export default SpecialHamburgers;
