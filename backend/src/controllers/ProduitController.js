// ProduitController.js
const db = require('../database/dbs');

const ajouterProduitDansPanier = async (nomProduit, prixProduit) => {
  const sql = 'INSERT INTO panier (nom_produit, prix_produit) VALUES (?, ?)';
  const params = [nomProduit, prixProduit];

  try {
    const [result] = await db.query(sql, params);
    return result.insertId;
  } catch (error) {
    throw new Error(`Erreur lors de l'ajout du produit dans le panier : ${error.message}`);
  }
};

const supprimerProduitDuPanier = async (idProduit) => {
  const sql = 'DELETE FROM panier WHERE id = ?';
  const params = [idProduit];

  try {
    const [result] = await db.query(sql, params);
    return result.affectedRows > 0;
  } catch (error) {
    throw new Error(`Erreur lors de la suppression du produit du panier : ${error.message}`);
  }
};

module.exports = {
  ajouterProduitDansPanier,
  supprimerProduitDuPanier,
};
