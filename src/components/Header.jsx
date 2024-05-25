import { useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import Hero from './Hero.jsx';
import DesktopView from "./DesktopView";


const Header = () => {

  return (
    <>
      <header>
        <div className="logo-container">
          <a href="#" className="logo-link">
            <img className="logo-image" src={logo} alt="logo-image" />
          </a>
        </div>
        <div>
          <DesktopView />
        </div>
      </header>
    </>
  );
};

export default Header;
