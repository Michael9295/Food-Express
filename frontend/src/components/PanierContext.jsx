import React, { useState, createContext, useContext, useEffect } from "react";

const PanierContext = createContext();

export function usePanier() {
  return useContext(PanierContext);
}

export function PanierProvider({ children }) {
  const [panier, setPanier] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);

  function ajouterAuPanier(produit) {
    setPanier([...panier, produit]);
  }

  function supprimerDuPanier(index) {
    const nouveauxProduits = [...panier];
    nouveauxProduits.splice(index, 1);
    setPanier(nouveauxProduits);
  }

  useEffect(() => {
    const total = panier.reduce((acc, produit) => acc + (produit.prix || 0), 0);
    setPrixTotal(total);
  }, [panier]);

  const value = {
    panier,
    prixTotal,
    ajouterAuPanier,
    supprimerDuPanier,
  };

  return (
    <PanierContext.Provider value={value}>{children}</PanierContext.Provider>
  );
}
