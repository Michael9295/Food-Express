// Load environment variables from .env file
require("dotenv").config();
const mysql = require('mysql2/promise');

// Utilisez mysql ici...

// Import the Express application from src/app.js
const app = require("./src/app");

// Get the port from the environment variables
const port = process.env.APP_PORT || 8000;
app.listen(port, (err) => {
  if (err) {
    console.error("Le serveur ne tourne pas:", err);
  } else {
    console.log(`Le serveur écoute sur le port ${port}`);
  }
});
