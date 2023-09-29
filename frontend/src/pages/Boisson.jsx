import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import BoissonTitre from "../assets/boissonstitre-removebg-preview.png";
import Boisson1 from "../assets/boisson.png";
import Boisson3 from "../assets/boisson3.png";
import Boisson4 from "../assets/boisson4.png";
import Boisson5 from "../assets/boisson5.png";
import Boisson6 from "../assets/boisson6.png";
import Boisson7 from "../assets/boisson7.png";

function Boisson() {
  const { ajouterAuPanier } = usePanier();
  const [clickedButton, setClickedButton] = useState(null);

  const boissons = [
    { nom: "SANGRIA GOIKO", image: Boisson1, prix: 3.99 },
    { nom: "MOJITO MORENO", image: Boisson3, prix: 1.99 },
    { nom: "THE GLACE GOIKO", image: Boisson4, prix: 3.49 },
    { nom: "DAIQUIRI", image: Boisson5, prix: 2.29 },
    { nom: "GOIKO FRESH LEMONADE", image: Boisson6, prix: 1.79 },
    { nom: "GOIKOPITA", image: Boisson7, prix: 2.99 },
  ];

  const handleAjouterAuPanier = (index) => {
    setClickedButton(index);
    setTimeout(() => {
      setClickedButton(null);
    }, 1000);

    ajouterAuPanier(boissons[index]);
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
    maxWidth: "270px",
    maxHeight: "270px",
  };

  const imageStyleTitre = {
    maxWidth: "30%",
    maxHeight: "30%",
  };

  return (
    <div className="flex flex-col items-center bg-gray-200">
      <img
        src={BoissonTitre}
        alt="Boisson Titre"
        className="w-full"
        style={imageStyleTitre}
      />

      <div className="flex mt-4 mb-4">
        {boissons.slice(0, 3).map((boisson, index) => (
          <div key={index} className="mr-4">
            <img
              src={boisson.image}
              alt={`Boisson ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index)}
              onClick={() => handleAjouterAuPanier(index)}
            >
              {clickedButton === index ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {boisson.prix ? `${boisson.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <div className="flex">
        {boissons.slice(3).map((boisson, index) => (
          <div key={index} className="mr-4">
            <img
              src={boisson.image}
              alt={`Boisson ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index + 3)}
              onClick={() => handleAjouterAuPanier(index + 3)}
            >
              {clickedButton === index + 3 ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {boisson.prix ? `${boisson.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <Link to="/panier" className="text-white mt-4">
      </Link>
    </div>
  );
}

export default Boisson;
