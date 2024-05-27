import { useEffect, useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import Hero from './Hero.jsx';
import DesktopView from "./DesktopView";
import MobileView from "./MobileView.jsx";


const Header = () => {

  let [isWidth , setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  return (
    <>
      <header>
        <div className="logo-container">
          <a href="#" className="logo-link">
            <img className="logo-image" src={logo} alt="logo-image" />
          </a>
        </div>
        <div>
          {isWidth >=845 ?<DesktopView/> : <MobileView/>}
        </div>
      </header>
    </>
  );
};

export default Header;
