import React, { useState } from "react";
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
  const [clickedButton, setClickedButton] = useState(null);

  const entrées = [
    { nom: "BOOM BALLS", image: Entrée1, prix: 3.99 },
    { nom: "TEQUEPARTY", image: Entrée2, prix: 2.49 },
    { nom: "TRI-LOADED", image: Entrée3, prix: 4.49 },
    { nom: "ONION RINGS", image: Entrée4, prix: 3.29 },
    { nom: "TEQUES", image: Entrée5, prix: 2.79 },
    { nom: "CHORREO NACHOS", image: Entrée6, prix: 3.99 },
  ];

  const handleAjouterAuPanier = (index) => {
    setClickedButton(index);
    setTimeout(() => {
      setClickedButton(null);
    }, 1000);
    ajouterAuPanier(entrées[index]);
  };

  const buttonStyle = (index) => ({
    backgroundColor: clickedButton === index ? "green" : "orange",
    color: "white",
    padding: "0.25rem 0.5rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "0.5rem",
    marginLeft: "1rem",
  });

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const imageStyle = {
    width: "280px",
    height: "280px",
    margin: "0 1rem",
  };
  
  const titreImageStyle = {
    maxWidth: "25%",
    maxHeight: "25%",
    display: "block",
    margin: "0 auto",
  };

  const secondRowStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "2rem",
  };

  return (
    <div className="bg-gray-200">
      <img
        src={EntréesTitre}
        alt="Entrées Titre"
        style={titreImageStyle}
      />

      <div style={containerStyle}>
        {[Entrée1, Entrée2, Entrée3].map((image, index) => (
          <div key={index} className="mr-2">
            <img
              src={image}
              alt={`Entrée ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index)}
              onClick={() => handleAjouterAuPanier(index)}
            >
              {clickedButton === index ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {entrées[index].prix ? `${entrées[index].prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <div style={secondRowStyle}>
        {[Entrée4, Entrée5, Entrée6].map((image, index) => (
          <div key={index} className="mr-2">
            <img
              src={image}
              alt={`Entrée ${index + 4}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index + 3)}
              onClick={() => handleAjouterAuPanier(index + 3)}
            >
              {clickedButton === index + 3 ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {entrées[index + 3].prix ? `${entrées[index + 3].prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <Link to="/panier" className="text-white">
      </Link>
    </div>
  );
}

export default Entrées;
