import Header from './Header';

const Hero = () =>{
    return(
        <div className="hero-container">
            <div className="overlay-div"></div>
            <Header/>
            <section className="hero">
                <div className="hero-content-wrapper">
                    <p className="hero-content">immersive experiences that delivers</p>
                </div>
            </section>
        </div>
    )
}
export default Hero; 