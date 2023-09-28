// ProduitModel.js
const db = require('../database/dbs');

const creerProduit = async (nom, prix, type_produit) => {
  const sql = 'INSERT INTO produits (nom, prix, type_produit) VALUES (?, ?, ?)';
  const params = [nom, prix, type_produit];

  try {
    const [result] = await db.query(sql, params);
    return result.insertId;
  } catch (error) {
    throw new Error(`Erreur lors de la création du produit : ${error.message}`);
  }
};

module.exports = {
  creerProduit,
};
