const express = require('express');
const { initializeDb } = require('./database/dbs');
const produitRoutes = require('./produit.routes');
const panierRoutes = require('./panier.routes');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

initializeDb();

app.use('/produits', produitRoutes);
app.use('/panier', panierRoutes);

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
