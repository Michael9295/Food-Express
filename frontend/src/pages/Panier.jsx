import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePanier } from "../components/PanierContext";

const Panier = () => {
  const { panier, prixTotal, supprimerDuPanier, modifierQuantiteProduit, viderPanier } = usePanier();

  const handleConfirmerCommande = () => {
    toast.success("Votre commande a bien été prise en compte.", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });

    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };

  const handleSupprimerProduit = (index) => {
    supprimerDuPanier(index);
    toast.info("Produit supprimé du panier", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });
  };

  const handleModifierQuantiteProduit = (index, nouvelleQuantite) => {
    modifierQuantiteProduit(index, nouvelleQuantite);
  };

  const handleSupprimerTout = () => {
    viderPanier();
    toast.info("Tous les produits ont été supprimés du panier", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow container mx-auto mt-0 bg-gray-200">
        <h1 className="text-2xl mb-4">Votre Panier</h1>
        <button
          onClick={handleSupprimerTout}
          className="bg-red-500 text-white px-4 py-2 mt-4 mb-4"
        >
          Tout supprimer
        </button>

        <div className="flex flex-col">
          {panier.map((produit, index) => (
            <div key={index} className="flex justify-between py-2 px-4 border-b">
              <span>{produit.nom}</span>
              <div className="flex items-center">
                <span>Quantité: </span>
                <input
                  type="number"
                  value={produit.quantite || 1}
                  min="1"
                  onChange={(e) => handleModifierQuantiteProduit(index, parseInt(e.target.value))}
                />
              </div>
              <span>
                {produit.prix !== undefined
                  ? (produit.prix * (produit.quantite || 1)).toFixed(2) + ' €'
                  : 'N/A'}
              </span>
              <button
                onClick={() => handleSupprimerProduit(index)}
                className="text-red-500"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-between py-2 px-4 mt-4 border-t">
          <span>Total</span>
          <span>
            {prixTotal.toFixed(2)} €
          </span>
        </div>
      </div>

      <footer className="bg-gray-200 text-center py-4">
        <button
          onClick={handleConfirmerCommande}
          className="bg-orange-500 text-white px-4 py-2 mt-4 mx-auto block"
        >
          Confirmer la commande
        </button>
      </footer>

      <ToastContainer />
    </div>
  );
};

export default Panier;
