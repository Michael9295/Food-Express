import React, { useState } from "react";
import { Link } from "react-router-dom";
import { usePanier } from "../components/PanierContext";
import SaladesTitre from "../assets/saladestitre-removebg-preview.png";
import Salade1 from "../assets/salade1.png";
import Salade2 from "../assets/salade2.png";
import Salade3 from "../assets/salade3.png";

const imageContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const imageWrapperStyle = {
  flex: '0 0 auto',
  margin: '0 5px',
};

const imageStyle = {
  width: '80%',
};

function Salades() {
  const { ajouterAuPanier } = usePanier();
  const [clickedButton, setClickedButton] = useState(null);

  const salades = [
    { nom: "LA SAINT-TROP", image: Salade1, prix: 2.99 },
    { nom: "LA OLIVIA", image: Salade2, prix: 3.99 },
    { nom: "AVE CAESAR", image: Salade3, prix: 4.99 },
  ];

  const handleAjouterAuPanier = (index) => {
    setClickedButton(index);
    
    setTimeout(() => {
      setClickedButton(null);
    }, 1000);

    ajouterAuPanier(salades[index]);
  };

  const buttonStyle = (index) => ({
    backgroundColor: clickedButton === index ? "green" : "orange",
    color: "white",
    padding: "0.25rem 0.5rem",
    border: "none",
    borderRadius: "4px",
    marginTop: "0.5rem",
  });

  return (
    <div className="bg-gray-200">
      <img
        src={SaladesTitre}
        alt="Salades Titre"
        className="w-full"
        style={{ maxWidth: "20%", maxHeight: "50%", margin: "0 auto" }}
      />

      <div style={imageContainerStyle}>
        {salades.map((salade, index) => (
          <div key={index} style={imageWrapperStyle}>
            <img
              src={salade.image}
              alt={`Salade ${index + 1}`}
              style={imageStyle}
            />
            <button
              style={buttonStyle(index)}
              onClick={() => handleAjouterAuPanier(index)}
            >
              {clickedButton === index ? "Ajouté !" : "Ajouter au panier"} <br />
              Prix: {salade.prix ? `${salade.prix.toFixed(2)} €` : "N/A"}
            </button>
          </div>
        ))}
      </div>

      <Link to="/panier" className="text-white">
      </Link>
    </div>
  );
}

export default Salades;
