import React from "react";
import { Link } from "react-router-dom"; // Ajout de l'import de Link

function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6 text-left">
      <div className="text-left">&copy; Food Express</div>
      <Link to="/contact" className="text-white">
        Nous Contacter
      </Link>
    </footer>
  );
}

export default Footer;
