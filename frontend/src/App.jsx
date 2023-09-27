import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import Salades from "./pages/Salades";
import Hamburgers from "./pages/Hamburgers";
import Entrées from "./pages/Entrées";
import Desserts from "./pages/Desserts";
import Boisson from "./pages/Boisson";
import SpecialHamburgers from "./pages/SpecialHamburgers";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/boissons" element={<Boisson />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/entrées" element={<Entrées />} />
          <Route path="/hamburgers" element={<Hamburgers />} />
          <Route path="/spécial-hamburgers" element={<SpecialHamburgers />} />
          <Route path="/salades" element={<Salades />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
