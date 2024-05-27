import DesktopView from "./DesktopView";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-left">
        <div className="logo-container">
          <img src={logo} alt="" />
        </div>
        <DesktopView />
      </div>
      <div className="footer-right">
        <div className="media-links">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={pinterest} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
        <p>&copy; 2021 Loopstudios. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
