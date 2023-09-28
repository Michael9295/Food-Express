// Panier.js
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePanier } from "../components/PanierContext";

function Panier() {
  const { panier, prixTotal } = usePanier();

  const handleConfirmerCommande = () => {
    toast.success("Votre commande a bien été prise en compte.", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl mb-4">Votre Panier</h1>
      <div className="flex flex-col">
        {panier.map((produit, index) => (
          <div key={index} className="flex justify-between py-2 px-4 border-b">
            <span>Produit {index + 1}</span>
            <span>{produit.toFixed(2)} €</span>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-2 px-4 mt-4 border-t">
        <span>Total</span>
        <span>{prixTotal.toFixed(2)} €</span>
      </div>
      <button
        onClick={handleConfirmerCommande}
        className="bg-orange-500 text-white px-4 py-2 mt-4"
      >
        Confirmer la commande
      </button>
      <ToastContainer />
    </div>
  );
}

export default Panier;
