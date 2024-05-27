import { useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import closeIcon from '../../src/assets/images/icon-close.svg';
import hamburgerIcon from '../../src/assets/images/icon-hamburger.svg';
import '../styles/Hamburger.css';

const MobileView = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    return (
        <div className="hamburger-menu-container">
            <button onClick={toggleNav}>
                <img src={isNavOpen? closeIcon : hamburgerIcon} alt= {isNavOpen? 'close-Icon': 'hamburger-icon'}/>
            </button>

            {isNavOpen && (
                <div className="menu-content">
                    <div className="hamburger-top">
                        <img src={logo} alt="logo" />
                        <button onClick={toggleNav}>
                            <img src={closeIcon} alt="close-icon" />
                        </button>
                    </div>
                    <ul className="mobile-menu-nav">
                        <li className="mobile_menu-item"><a href="#">About</a></li>
                        <li className="mobile_menu-item"><a href="#">Careers</a></li>
                        <li className="mobile_menu-item"><a href="#">Events</a></li>
                        <li className="mobile_menu-item"><a href="#">Products</a></li>
                        <li className="mobile_menu-item"><a href="#">Support</a></li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export default MobileView;
