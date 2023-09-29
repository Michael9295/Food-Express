import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black text-white py-4 px-6 text-left">
      <div className="container mx-auto flex justify-between items-center">
        <div>&copy; Food Express</div>
        <Link to="/contact" className="text-white">
          Nous Contacter
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
