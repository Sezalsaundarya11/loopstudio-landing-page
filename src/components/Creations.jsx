import Creation from './Creation.jsx';
import { CARDS } from '../assets/images/data.js';
import '../styles/Creation.css';
import { useCallback, useEffect, useState } from 'react';
import Footer from './Footer.jsx';

const Creations = () =>{
    let [isWidth , setWidth] = useState(window.innerWidth);

  useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      
      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

    return(
        <div className="creation-container">
            <div className="creation-wrapper">
                <div className="creation-top">
                    <h2 className="creation-heading">Our Creations</h2>
                     <button className="see-all">See all</button>
                </div>
                <div className="creation-cards">
                    {CARDS.map((cards)=>(
                        <Creation key ={cards.title} {...cards}/>
                    ))}

                </div>
                
                {isWidth <=768 ?<div className="btn-footer"><button className="see-all-footer">See all</button></div>:undefined}
            </div> 
        </div>
    )
}

export default Creations;