import React from "react";
import HamburgersTitre from "../assets/hamburgerstitre-removebg-preview.png";
import Hamburger1 from "../assets/hamburger1.png";
import Hamburger2 from "../assets/hamburger3.png";
import Hamburger3 from "../assets/hamburger4.png";
import Hamburger4 from "../assets/hamburger5.png";
import Hamburger5 from "../assets/hamburger6.png";
import Hamburger6 from "../assets/hamburger7.png";

function Hamburgers() {
    return (
        <div>
          <img
            src={HamburgersTitre}
            alt="Hamburgers Titre"
            className="w-full"
            style={{ maxWidth: '50%', maxHeight: '50%' }}
          />

          <div className="flex mt-4 ml-20">
            <img src={Hamburger1} alt="Hamburger1" className="max-w-1/3 mr-2 max-h-1/3" />
            <img src={Hamburger2} alt="Hamburger2" className="max-w-1/3 mr-2 max-h-1/3" />
            <img src={Hamburger3} alt="Hamburger3" className="max-w-1/3 max-h-1/3" />
          </div>

          <div className="flex mt-4 ml-20">
            <img src={Hamburger4} alt="Hamburger4" className="max-w-1/3 mr-2 max-h-1/3" />
            <img src={Hamburger5} alt="Hamburger5" className="max-w-1/3 mr-2 max-h-1/3" />
            <img src={Hamburger6} alt="Hamburger6" className="max-w-1/3 max-h-1/3" />
          </div>
        </div>
    );
}

export default Hamburgers;
