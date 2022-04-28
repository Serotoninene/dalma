import React from "react";
// Components
import Button from "./Button";
// Assets
import dalmaLogo from "../Assets/Logos/logo-dalma-dark.png";

export default function Navbar() {
  return (
    <div id="Navbar" className="absolute  flex justify-between align-center">
      <div className="flex">
        <div className="dalmaLogo">
          <img src={dalmaLogo} alt="dalma" className="img-fluid"></img>
        </div>
        <ul className="flex navLinks align-center">
          <li>Nos garanties</li>
          <li>Comparer</li>
        </ul>
      </div>
      <div className="flex ">
        <Button bgColor="#FFFFFF" color="#111731">
          Se connecter
        </Button>
        <Button>Ouvrir un compte</Button>
      </div>
    </div>
  );
}
