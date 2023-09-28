// PanierContext.js
import React, { createContext, useState, useContext } from "react";

const PanierContext = createContext();

export function PanierProvider({ children }) {
  const [panier, setPanier] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);

  const ajouterAuPanier = (prix) => {
    setPanier([...panier, prix]);
    setPrixTotal((prevPrixTotal) => prevPrixTotal + prix);
  };

  return (
    <PanierContext.Provider value={{ panier, ajouterAuPanier, prixTotal }}>
      {children}
    </PanierContext.Provider>
  );
}

export const usePanier = () => {
  const context = useContext(PanierContext);
  if (!context) {
    throw new Error(
      "usePanier doit être utilisé à l'intérieur du PanierProvider"
    );
  }
  return context;
};
