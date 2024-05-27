import { useEffect, useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import closeIcon from '../../src/assets/images/icon-close.svg'

const MobileView = () =>{
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav =() =>{
        setNavOpen(!isNavOpen);
    }


    return(
        <div className="hamburger-menu-container">
            <div className="hamburger-top">
                <button onClick = {toggleNav}>
                <img  src= {closeIcon} alt='close-icon'/>
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
    )

}

export default MobileView;