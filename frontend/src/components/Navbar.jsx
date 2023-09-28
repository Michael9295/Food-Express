import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/Foodexpress.png";
import logopanier from "../assets/logopanier.png";
import { usePanier } from "./PanierContext";

function Navbar() {
  const [panierCount, setPanierCount] = useState(0);
  const { panier } = usePanier();

  useEffect(() => {
    setPanierCount(panier.length);
  }, [panier]);

  return (
    <nav className="bg-black p-6 flex items-center justify-between">
      <div className="flex items-center flex-shrink-0 text-white mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 h-22" />
        </Link>
      </div>

      <div className="hidden lg:flex flex-grow justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-white">
            Accueil
          </Link>
          <Link to="/boissons" className="text-white">
            Boissons
          </Link>
          <Link to="/desserts" className="text-white">
            Desserts
          </Link>
          <Link
            to="/panier"
            className="text-white"
            style={{ position: "relative", display: "inline-block" }}
          >
            <img src={logopanier} alt="Panier" className="w-15 h-10" />
            <span
              className="bg-orange-500 text-white px-1 py-0 rounded-full"
              style={{ position: "absolute", top: "-8px", right: "0" }}
            >
              {panierCount}
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
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
      </div>

      <div className="block lg:hidden">
        <button className="text-white-500 focus:outline-none">
          <FaBars />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
