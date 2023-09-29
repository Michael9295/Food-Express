import React, { useState } from "react";
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
  const [clickedButton, setClickedButton] = useState(null);

  const desserts = [
    { nom: "ICAKE", image: Dessert1, prix: 4.99 },
    { nom: "CHEESECAKE A L'ESPAGNOLE", image: Dessert2, prix: 3.49 },
    { nom: "VANINUTE SHAKE", image: Dessert3, prix: 2.99 },
    { nom: "GOIKO SHAKE", image: Dessert4, prix: 3.79 },
    { nom: "FROZEN GOIKO", image: Dessert5, prix: 4.49 },
    { nom: "GOIKO BROOKIE", image: Dessert6, prix: 2.29 },
  ];

  const handleAjouterAuPanier = (index) => {
    setClickedButton(index);
    setTimeout(() => {
      setClickedButton(null);
    }, 1000);
    ajouterAuPanier(desserts[index]);
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
    margin: "0",
  };

  const flexContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    marginLeft: "20px",
    marginRight: "20px",
  };

  const titreImageStyle = {
    maxWidth: "30%",
    maxHeight: "30%",
    display: "block",
    margin: "0 auto",
  };

  return (
    <div className="bg-gray-200">
      <img
        src={DessertTitre}
        alt="Dessert Titre"
        className="w-full"
        style={titreImageStyle}
      />

      <div style={flexContainerStyle}>
        {desserts.slice(0, 3).map((dessert, index) => (
          <div key={index} className="mr-2 mb-2">
            <img
              src={dessert.image}
              alt={`Dessert ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index)}
              onClick={() => handleAjouterAuPanier(index)}
            >
              {clickedButton === index ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {dessert.prix ? `${dessert.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <div style={flexContainerStyle}>
        {desserts.slice(3).map((dessert, index) => (
          <div key={index} className="mr-2 mb-2">
            <img
              src={dessert.image}
              alt={`Dessert ${index + 4}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index + 3)}
              onClick={() => handleAjouterAuPanier(index + 3)}
            >
              {clickedButton === index + 3 ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {dessert.prix ? `${dessert.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <Link to="/panier" className="text-white mt-4">
      </Link>
    </div>
  );
}

export default Desserts;
