const Creation = ({title, desktopImg, mobileImg, alt}) => {
    return (
        <div className="cards-display">
            <picture>
                <source srcSet={mobileImg} media="(max-width:845px)"/>
                <img src={desktopImg} alt={alt}/>
            </picture>
            <div className="crad-title">
                <p>{title}</p>
            </div>
        </div>
    )
}

export default Creation;