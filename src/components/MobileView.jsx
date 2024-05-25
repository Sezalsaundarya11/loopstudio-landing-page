import { useState } from "react";
import logo from "../../src/assets/images/logo.svg";
import closeIcon from '../../src/assets/images/icon-close.svg'

const MobileView = () =>{
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav =() =>{
        setNavOpen()
    }

    return(
        <div className="hamburger-menu-container">
            <div className="hamburger-top">
                <button>
                <img  src= {closeIcon} alt='close-icon'/>
                </button>
                
            </div>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Events</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">Support</a></li> 
            </ul>
        </div>
    )

}

export default MobileView;