import Creation from './Creation.jsx';
import { CARDS } from '../assets/images/data.js';

const Creations = () =>{
    return(
        <div className="creation-container">
            <div className="creation-wrapper">
                <div className="creation-top">
                    <h2 className="creation-heading">Our Creations</h2>
                     <button className="see-all">See alls</button>
                </div>
                <div className="creation-cards">
                    {CARDS.map((cards)=>(
                        <Creation key ={cards.title} {...cards}/>
                    ))}

                </div>
            </div> 
        </div>
    )
}

export default Creations;