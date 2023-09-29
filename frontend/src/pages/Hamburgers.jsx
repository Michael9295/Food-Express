import React, { useState } from "react";
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
  const [clickedButton, setClickedButton] = useState(null);

  const hamburgers = [
    { nom: "MADRID SAGA", image: Hamburger1, prix: 4.99 },
    { nom: "HAMBURGER LA CHICK-TARIENNE", image: Hamburger2, prix: 3.49 },
    { nom: "HAMBURGER GRETA", image: Hamburger3, prix: 2.99 },
    { nom: "HAMBURGER MADRID", image: Hamburger4, prix: 3.79 },
    { nom: "HAMBURGER GUAKA-CHICKEN", image: Hamburger5, prix: 4.49 },
    { nom: "HAMBURGER LE SMASH", image: Hamburger6, prix: 2.29 },
  ];

  const handleAjouterAuPanier = (index) => {
    setClickedButton(index);
    setTimeout(() => {
      setClickedButton(null);
    }, 1000);
    ajouterAuPanier(hamburgers[index]);
  };

  const buttonStyle = (index) => ({
    backgroundColor: clickedButton === index ? "green" : "orange",
    color: "white",
    padding: "0.25rem 0.5rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "0.5rem",
  });

  const imageContainerStyle = {
    display: "flex",
    justifyContent: "center",
    marginBottom: "1rem",
  };

  const imageStyle = {
    width: "280px",
    height: "280px",
    margin: "0 0.5rem",
  };

  const hamburgersTitreStyle = {
    maxWidth: "35%",
    maxHeight: "35%",
    margin: "0 auto",
  };

  return (
    <div className="bg-gray-200">
      <img
        src={HamburgersTitre}
        alt="Hamburgers Titre"
        className="w-full"
        style={hamburgersTitreStyle}
      />

      <div style={imageContainerStyle}>
        {hamburgers.slice(0, 3).map((hamburger, index) => (
          <div key={index} className="mr-2 mb-2">
            <img
              src={hamburger.image}
              alt={`Hamburger ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index)}
              onClick={() => handleAjouterAuPanier(index)}
            >
              {clickedButton === index ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {hamburger.prix ? `${hamburger.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <div style={imageContainerStyle}>
        {hamburgers.slice(3).map((hamburger, index) => (
          <div key={index} className="mr-2 mb-2">
            <img
              src={hamburger.image}
              alt={`Hamburger ${index + 4}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index + 3)}
              onClick={() => handleAjouterAuPanier(index + 3)}
            >
              {clickedButton === index + 3 ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {hamburger.prix ? `${hamburger.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <Link to="/panier" className="text-white">
      </Link>
    </div>
  );
}

export default Hamburgers;
