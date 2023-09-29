import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Foodexpress-removebg-preview.png";
import logopanier from "../assets/logopanier-removebg-preview.png";
import { usePanier } from "./PanierContext";

function Navbar() {
  const [panierCount, setPanierCount] = useState(0);
  const { panier } = usePanier();

  useEffect(() => {
    setPanierCount(panier.length);
  }, [panier]);

  return (
    <nav className="bg-black p-6 flex items-center justify-between">
      <div className="flex items-center flex-grow">
        <div className="lg:hidden">
          <button className="text-white">
            <FaBars />
          </button>
        </div>
        <div className="hidden lg:flex items-center space-x-6 ml-8">
          <Link to="/" className="text-white">
            Accueil
          </Link>
          <Link to="/boissons" className="text-white">
            Boissons
          </Link>
          <Link to="/desserts" className="text-white">
            Desserts
          </Link>
        </div>
        <div className="flex-grow text-center ml-40">
        <Link to="/">
  <img src={logo} alt="Logo" className="w-30 h-40 mx-auto" />
</Link>

        </div>
      </div>

      <div className="flex items-center space-x-6 mr-8">
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/spécial-hamburgers" className="text-white">
            Spécial Hamburgers
          </Link>
          <Link to="/hamburgers" className="text-white">
            Hamburgers
          </Link>
          <Link to="/entrées" className="text-white">
            Entrées
          </Link>
          <Link to="/salades" className="text-white">
            Salades
          </Link>
        </div>
        <Link to="/panier" className="relative inline-block">
  <img src={logopanier} alt="Panier" className="w-20 h-15" />
  <span className="bg-orange-500 text-white px-2 py-1 rounded-full absolute top-0 right-0" style={{ fontSize: '1.2rem' }}>
    {panierCount}
  </span>
</Link>
      </div>
    </nav>
  );
}

export default Navbar;
