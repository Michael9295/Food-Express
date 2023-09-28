import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Salades from "./pages/Salades";
import Hamburgers from "./pages/Hamburgers";
import Entrées from "./pages/Entrées";
import Desserts from "./pages/Desserts";
import Boisson from "./pages/Boisson";
import SpecialHamburgers from "./pages/SpecialHamburgers";
import Panier from "./pages/Panier";
import { PanierProvider } from "./components/PanierContext";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <PanierProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/panier" element={<Panier />} />
            <Route path="/boissons" element={<Boisson />} />
            <Route path="/desserts" element={<Desserts />} />
            <Route path="/entrées" element={<Entrées />} />
            <Route path="/hamburgers" element={<Hamburgers />} />
            <Route path="/spécial-hamburgers" element={<SpecialHamburgers />} />
            <Route path="/salades" element={<Salades />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </PanierProvider>
    </BrowserRouter>
  );
}

export default App;
