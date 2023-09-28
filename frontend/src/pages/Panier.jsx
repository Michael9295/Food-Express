import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { usePanier } from "../components/PanierContext";

function Panier() {
  const { panier, prixTotal, supprimerDuPanier } = usePanier();
  const [panierCount, setPanierCount] = useState(0);

  useEffect(() => {
    // Mettez à jour le compteur lorsque le panier change
    setPanierCount(panier.length);
  }, [panier]);

  const handleConfirmerCommande = () => {
    toast.success("Votre commande a bien été prise en compte.", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 3000,
      style: {
        background: "black",
        color: "white",
      },
    });

    // Rafraîchir la page après 5 secondes
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

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl mb-4">Votre Panier</h1>
      <div className="flex flex-col">
        {panier.map((produit, index) => (
          <div key={index} className="flex justify-between py-2 px-4 border-b">
            <span>{produit.nom}</span>
            <span>
              {produit.prix !== undefined
                ? `${produit.prix.toFixed(2)} €`
                : "N/A"}
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
        <span>{prixTotal.toFixed(2)} €</span>
      </div>
      <button
        onClick={handleConfirmerCommande}
        className="bg-orange-500 text-white px-4 py-2 mt-4 mx-auto block"
      >
        Confirmer la commande
      </button>

      <ToastContainer />
    </div>
  );
}

export default Panier;
