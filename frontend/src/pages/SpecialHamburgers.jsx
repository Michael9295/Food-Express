import React from "react";
import SpecialHamburgersTitre from "../assets/spécialhamburgers-removebg-preview.png";
import SpecialHamburgers1 from "../assets/spécialhamburger1.png";
import SpecialHamburgers2 from "../assets/spécialhamburger2.png";
import SpecialHamburgers3 from "../assets/spécialhamburger3.png";

function SpecialHamburgers() {
    return (
        <div>
          <img
            src={SpecialHamburgersTitre}
            alt="Spécial Hamburgers Titre"
            className="w-full"
            style={{ maxWidth: '50%', maxHeight: '50%' }}
          />

          <div className="flex mt-4 ml-20">
            <img src={SpecialHamburgers1} alt="SpecialHamburgers1" className="max-w-1/3 mr-2 max-h-1/3" />
            <img src={SpecialHamburgers2} alt="SpecialHamburgers2" className="max-w-1/3 mr-2 max-h-1/3" />
            <img src={SpecialHamburgers3} alt="SpecialHamburgers3" className="max-w-1/3 max-h-1/3" />
          </div>
        </div>
    );
}

export default SpecialHamburgers;
