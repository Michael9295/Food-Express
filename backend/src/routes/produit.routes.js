//Produit.routes.js
const express = require('express');
const { creerProduit } = require('./ProduitModel');

const router = express.Router();

router.post('/creer', async (req, res) => {
  const { nom, prix, type_produit } = req.body;

  try {
    const produitId = await creerProduit(nom, prix, type_produit);
    res.status(200).json({ message: 'Produit créé avec succès', produitId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
