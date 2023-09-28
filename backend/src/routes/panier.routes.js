// panier.routes.js
const express = require('express');
const { ajouterProduitDansPanier, supprimerProduitDuPanier } = require('./PanierController'); // Notez le changement de nom ici

const router = express.Router();

router.post('/ajouter', async (req, res) => {
  const { nomProduit, prixProduit } = req.body;

  try {
    const produitId = await ajouterProduitDansPanier(nomProduit, prixProduit);
    res.status(200).json({ message: 'Produit ajouté au panier', produitId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/supprimer/:idProduit', async (req, res) => {
  const { idProduit } = req.params;

  try {
    const success = await supprimerProduitDuPanier(idProduit);
    if (success) {
      res.status(200).json({ message: 'Produit supprimé du panier' });
    } else {
      res.status(404).json({ message: 'Produit non trouvé dans le panier' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
